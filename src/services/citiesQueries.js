import axios from "axios";

const cities = axios.create({
  baseURL: "http://localhost:3030",
});

export const getAllCities = async () => {
  try {
    const { data } = await cities("/api/cities");
    return data;
  } catch (error) {
    return [];
  }
};
export const getCity = async (id) => {
  try {
    const { data } = await cities("/api/city/" + id);
    return data;
  } catch (error) {
    return [];
  }
};
export const getContries = async () => {
  try {
    const { data } = await axios(
      "https://countriesnow.space/api/v0.1/countries"
    );
    return data;
  } catch (error) {
    return [];
  }
};
