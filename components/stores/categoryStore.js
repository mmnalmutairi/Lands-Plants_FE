import React from "react";
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  categories = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // ****************** FETCH Category LIST METHOD ******************
  categoryFetch = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
      this.isLoading = false;
    } catch (error) {
      console.error("fcategoryFetch: ", error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.categoryFetch();

export default categoryStore;
