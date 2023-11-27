import api from "./apiConfig";

export const getDrivers = async () => {
    try{
        const response = await api.get("/drivers");
        return response.data;
    }   catch (error) {
        console.log ("Error: Getting drivers.", error);
    }  
};

export const createDriver = async (driverData) => {
    try {
      const response = await api.post("/drivers", driverData);
      return response.data;
    } catch (error) {
      console.log("Error: Creating driver.", error);
    }
  }; 

  export const updateDriver = async (id, driverData) => {
    try {
      const response = await api.put(`/drivers/${id}`, driverData);
      return response.data;
    } catch (error) {
      console.log("Error: Updating driver.", error);
    }
  };
  
  export const deleteDriver = async (id) => {
    try {
      const response = await api.delete(`/drivers/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error: Deleting driver.", error);
    }
  };