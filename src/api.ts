import axios, { AxiosResponse } from "axios";
import { ImageData } from "./components/types";

const API_KEY = "hKPMlatOY64AlkJ4VOiBsiFkQnhoXS5yR5titRTlXn8";
axios.defaults.baseURL = "https://api.unsplash.com";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,

};
export const renderImage = async (query: string, page: number): Promise<ImageData> => {
  const { data }:AxiosResponse<ImageData> = await axios.get <ImageData>(
    `/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};
