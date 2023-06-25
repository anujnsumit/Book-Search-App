import express from 'express';
import BookRoute from './route/bookRoutes.js';
import cors from 'cors';

const app=express();
app.use(cors());
app.use('/api/books',BookRoute);

app.listen(8080,()=>console.log(`server is running`));