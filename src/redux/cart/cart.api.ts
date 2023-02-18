import { Cart, Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getCartAPI = async () => {
  let response: AxiosResponse<Cart[]> = await axios.get(
    "http://localhost:8080/carts"
  );
  return response.data;
};

export const addItemToCartAPI=async(productId:number,quantity:number)=>{
  let res:AxiosResponse<Product>= await axios.post(`http://localhost:8080/carts`,
    {productId,quantity}
  )
  return res.data;
}
