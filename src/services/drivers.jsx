import api from "./apiConfig";

export const getDrivers = async () => {
    try{
        const response = await api.get("/drivers");
        return response.data;
    }   catch (error) {
        console.log ("Error: Getting drivers.", error);
    }  
};