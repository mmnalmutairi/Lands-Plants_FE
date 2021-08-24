import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

class MyPlantStore {
  items = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchItems = async () => {
    const items = await AsyncStorage.getItem("myPlant");
    this.items = items ? JSON.parse(items) : [];
  };

  AddItemToSchedule = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.plantId === newItem.plantId
    );
    if (foundItem) alert("This plant is already there :)");
    else {
      await instance.post("/plantit", newItem);
      this.items.push(newItem);
      alert(`The plant has been add in your Garden :)`);
    }
    await AsyncStorage.setItem("myPlant", JSON.stringify(this.items));
  };
}

const myPlantStore = new MyPlantStore();
myPlantStore.fetchItems();
export default myPlantStore;
