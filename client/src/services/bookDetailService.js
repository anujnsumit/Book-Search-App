import { API_PATH } from "../constant/apiConstant";
import axiosInstance from "./axios";

export const getBooksListService=async()=>{
    try {
       const resp=axiosInstance.get(`/${API_PATH}`)
       return resp;
    } catch (error) {
        console.log(error);
    }
}


