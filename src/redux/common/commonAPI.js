import axios from "axios";
let Base_BE_URL = "http://localhost:5000";

export const getHeaderMenuList = async () => {
  return await axios.get(`${Base_BE_URL}/headerMenus`);
};
