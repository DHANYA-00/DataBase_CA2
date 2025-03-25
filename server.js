const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('dotenv').config();
app.use(express.json());
const UserData=require('./schema');
const route=require('./routes')

const URI=process.env.URI;
const PORT=process.env.PORT;

mongoose.connect(URI)
.then(()=>{
    console.log("MongoDB Connected Successfully")
})
.catch((error)=>{
    console.log("Failed to Connect")
})

app.use('/api/restaurant',route)

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})