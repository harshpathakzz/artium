import axios from "axios";

export const productsService = async () => {
  try {
    const { data } = await axios.get("/api/products");
    return data.products;
  } catch (err) {
    console.error(err.message);
    return;
  }
};
