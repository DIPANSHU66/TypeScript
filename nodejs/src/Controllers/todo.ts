import { RequestHandler } from "express"
import { Todo } from "../Models/todo";
const todo:Todo[]=[];
export const CreateTodo:RequestHandler=(req,res)=>{
    const text= (<{text:string}>req.body).text
    const newTodo=  new Todo(Math.random().toString(),text);
    todo.push(newTodo)
res.status(200).json({
    message:"Todo ...  Created",
    newTodo})
}

export const gettodo:RequestHandler=(req,res)=>{
    res.status(200).json({todo})
}

export const UpdateTodo :RequestHandler<{todoid:string}>=(req,res)=>{
const todoid=req.params.todoid
const text=(req.body as {text:string}).text;
const todoindex=todo.findIndex((todo)=>todo.id==todoid);
if(todoindex<0){throw new Error("Todo not found ...")}
//updateTodo
todo[todoindex]=new Todo(todo[todoindex].id,text);

res.status(200).json({
    message:"Todo updated",
    newTodo:todo[todoindex]})

}

export const deleteTodo:RequestHandler<{todoid:string}>=(req,res)=>{
const todoid=req.params.todoid
const todoindex=todo.findIndex((todo)=>todo.id==todoid);
if(todoindex<0){throw new Error("Todo not found ...")}
//deleteTodo

todo.splice(todoindex,1);
res.status(200).json({
    message:"todo removed succesfully",})

}