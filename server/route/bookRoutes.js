
import express from 'express';
import { getBookDetail, getBooks } from '../controller/bookControllers.js';

const route=express.Router();

route.get("/",getBooks);
route.get("/:id",getBookDetail)


export default route;