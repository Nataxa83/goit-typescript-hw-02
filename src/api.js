import axios from "axios";

const API_KEY = "hKPMlatOY64AlkJ4VOiBsiFkQnhoXS5yR5titRTlXn8";
axios.defaults.baseURL = "https://api.unsplash.com";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,

};
export const renderImage = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};
