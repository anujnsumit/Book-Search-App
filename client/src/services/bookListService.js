import { API_PATH } from "../constant/apiConstant";
import axiosInstance from "./axios";

export const getBooksDetailService=async({id})=>{
    try {
       const resp=axiosInstance.get(`/${API_PATH}/${id}`)
       return resp;
    } catch (error) {
        console.log(error);
    }
}