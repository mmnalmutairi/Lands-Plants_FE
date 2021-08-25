import { makeAutoObservable } from "mobx";
import instance from "./instance";

class EventStore {
  events = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // ** FETCH EVENT LIST METHOD **
  fetchEvents = async () => {
    try {
      const response = await instance.get("/events");
      this.events = response.data;
      // console.log(this.events);
      this.isLoading = false;
    } catch (error) {
      console.error("fetchEvents: ", error);
    }
  };

  updateEvent = async (updatedEvent) => {
    try {
      const formData = new FormData();
      for (const key in updatedEvent) formData.append(key, updatedEvent[key]);
      const response = await instance.put(
        `/events/${updatedEvent.id}`,
        formData
      );
      const event = this.events.find((event) => event.id === response.data.id);
      for (const key in event) event[key] = response.data[key];
    } catch (error) {
      console.log(error);
    }
  };

  getEventById = (eventId) => {
    return this.events.find((event) => event.id === eventId);
  };
}

const eventStore = new EventStore();
eventStore.fetchEvents();
export default eventStore;

// call events from backend event.id
// associate each plant.id with todolist
