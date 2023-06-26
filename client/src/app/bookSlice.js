import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../services/axios";
import { API_PATH } from "../constant/apiConstant";

export const getBookData=createAsyncThunk('book/getBooksList',async(args,{rejectWithValue})=>{
    try {
        const resp=await axiosInstance.get(`http://localhost:8080/${API_PATH}`)
        return resp;
     } catch (error) {
        rejectWithValue(error);
     }
}) 

export const getBookDetails=createAsyncThunk('book/getBookDetails',async(id,{rejectWithValue})=>{
    try {
        const resp=axiosInstance.get(`http://localhost:8080/${API_PATH}/${id}`)
        return resp;
     } catch (error) {
        rejectWithValue(error);
     }
})

const bookSlice=createSlice({
name:'book',
initialState:{
    booksList:[],
    isSuccess:false,
    isLoading:false,
    error:null,
    booksDetails:[]
},
reducers:{},
extraReducers:{
    [getBookData.pending]:(state)=>{
        state.isLoading=true;
    },
    [getBookData.fulfilled]:(state,{payload})=>{
        const {success,books}=payload?.data;
        state.isLoading=false;
        state.booksList=books;
        state.isSuccess=success;
    },
    [getBookData.rejected]:(state,{payload})=>{
        state.isLoading=false;
        state.isSuccess=false;
        state.error=payload;
    },
    [getBookDetails.pending]:(state)=>{
        state.isLoading=true;
    },
    [getBookDetails.fulfilled]:(state,{payload})=>{
        state.isLoading=false;
        state.booksDetails=payload?.data;
        state.isSuccess=true;
    },
    [getBookDetails.rejected]:(state,{payload})=>{
        state.isLoading=false;
        state.isSuccess=false;
        state.error=payload;
    }
}
})


export const {getBooksList,getBookDetail}=bookSlice.actions;

export default bookSlice.reducer;