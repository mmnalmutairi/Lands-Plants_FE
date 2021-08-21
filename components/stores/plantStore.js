import { makeAutoObservable } from "mobx";
import instance from "./instance";

class PlantStore {
  plants = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // ****************** FETCH PLANT LIST METHOD ******************
  fetchPlants = async () => {
    try {
      const response = await instance.get("/plants");
      this.plants = response.data;
      this.isLoading = false;
    } catch (error) {
      console.error("fetchTrips: ", error);
    }
  };

  getPlantById = (plantId) => {
    return this.plants.find((plant) => plant.id === plantId);
  };
}

const plantStore = new PlantStore();
plantStore.fetchPlants();

export default plantStore;
