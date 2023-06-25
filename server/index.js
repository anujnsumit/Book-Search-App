import express from 'express';
import BookRoute from './route/bookRoutes.js';

const app=express();

app.use('/api/books',BookRoute);

app.listen(8080,()=>console.log(`server is running`));