import express from 'express';
import morgan from 'morgan';
import errorHandler from './utils/globalErrorHandler.js';
import authRouter from './auth/routes.js';
const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// routes mounting
app.get("/health",(req,res)=>{
    res.status(200).send("healthy..")
})
app.use('/api/v1/auth',authRouter);
app.use(errorHandler);
app.use("*",(req,res)=>{
    res.status(404).json({message:`could not find ${req.originalUrl} on this server`})
})

export default app;
