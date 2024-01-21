import express from 'express';
import morgan from 'morgan';
import errorHandler from './utils/globalErrorHandler.js';
const app = express();


app.use(morgan("dev"));


// routes mounting
app.get("/health",(req,res)=>{
    res.status(200).send("healthy..")
})
app.use(errorHandler);
app.use("*",(req,res)=>{
    res.status(404).json({message:`could not find ${req.originalUrl} on this server`})
})

export default app;
