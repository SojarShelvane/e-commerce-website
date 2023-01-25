import axios from "axios";
let Base_BE_URL = "http://localhost:5000";

export const getProducts = async () => {
  /* try {
    return await axios.get(`${Base_BE_URL}/posts`);
  } catch (err) {
    return err;
  } */

  return await axios.get(`${Base_BE_URL}/products`);
};

export const getProductsByFilter = async (searchValue) => {
  return await axios.get(
    `${Base_BE_URL}/posts?title=${searchValue.title}&&from=${searchValue.date}`
  );
};
