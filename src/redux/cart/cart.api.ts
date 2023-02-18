import { Cart, Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getCartAPI = async () => {
  let response: AxiosResponse<Cart[]> = await axios.get(
    "https://vast-jade-puffer-shoe.cyclic.app/carts"
  );
  return response.data;
};

export const addItemToCartAPI=async(productId:number,quantity:number)=>{
  let res:AxiosResponse<Product>= await axios.post(`https://vast-jade-puffer-shoe.cyclic.app/carts`,
    {productId,quantity}
  )
  return res.data;
}
