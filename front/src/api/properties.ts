import { apiUrl } from "./apiUrl";
import { PropertyData } from "../types/PropertyData";

export const createProperty = async (propertyData: PropertyData) => {
    try {
      const response = await fetch(`${apiUrl}/properties`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create property");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating property:", error);
      throw error;
    }
  };

export const getProperties = async () => {
    try {
      const response = await fetch(`${apiUrl}/properties`);
      if (!response.ok) {
        throw new Error('Error fetching properties');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };