import {createSlice} from "@reduxjs/toolkit";

const initialState={
    booksList:[],
    bookDetail:[]
}

const bookSlice=createSlice({
name:'book',
initialState,
reducers:{
    getBooksList:(state,action)=>{
        state.booksList=action.payload;
    },
    getBookDetail:(state,action)=>{
        state.bookDetail=action.payload;
    }
}
})

export const {getBooksList,getBookDetail}=bookSlice.actions;

export default bookSlice.reducer;