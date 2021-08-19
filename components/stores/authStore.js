import React from "react"; //no need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser, navigation) => {
    try {
      const res = await instance.post("/signup", newUser);
      this.setUser(res.data.token);
      navigation.replace("Explore");
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData, navigation) => {
    try {
      const res = await instance.post("/signin", userData);
      // you are sending navigation to the steUser function right? check the function I can't see that it recieve the navigation?
      await this.setUser(res.data.token, navigation);
    } catch (error) {
      console.log(error);
    }
  };
  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    // this.user = null;
  };

  //So if you want to navigate to Explore page after signing up or in, you can do the navigation here
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
