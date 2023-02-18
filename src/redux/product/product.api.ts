import { Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getProductsAPI = async () => {
  let response: AxiosResponse<Product[]> = await axios.get(
    "https://vast-jade-puffer-shoe.cyclic.app/products"
  );
  return response.data;
};

export const getProductAPI=async(id:string)=>{
  let res:AxiosResponse<Product[]>=await axios.get(`https://vast-jade-puffer-shoe.cyclic.app/${id}`)
  return res.data
}