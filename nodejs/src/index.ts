import express,{Request,Response,NextFunction}  from 'express';
import bodyParser from 'body-parser';
import todoroutes from "./routes/todo"


const app = express();

app.use(bodyParser.json());
app.use("/todos",todoroutes);



// middleware to handle error any other request
app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({message:err.message})
})

const PORT=8000;
app.listen(PORT,()=>{
console.log(`server listen at port  ${PORT}`)
});
