import app from "./app.js";
import {PORT, DBURI} from './config.js'
import { connect } from "mongoose";


connect(DBURI).then(()=>{
    console.log("DB connection successful")
}).catch(err=>{
    console.log("DB connection error");
    console.log("err: ",err)
})

const server = app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`)
});

server.on("error",(err)=>{
    console.log("err: ",err)
})

process.on('uncaughtException',(err)=>{
    console.log("error: ",err);
    process.exit(1);
});

process.on('unhandledRejection',(err)=>{
    console.log("error: ",err);
    process.exit(1);
})