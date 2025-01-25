"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.UpdateTodo = exports.gettodo = exports.CreateTodo = void 0;
const todo_1 = require("../Models/todo");
const todo = [];
const CreateTodo = (req, res) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    todo.push(newTodo);
    res.status(200).json({
        message: "Todo ...  Created",
        newTodo
    });
};
exports.CreateTodo = CreateTodo;
const gettodo = (req, res) => {
    res.status(200).json({ todo });
};
exports.gettodo = gettodo;
const UpdateTodo = (req, res) => {
    const todoid = req.params.todoid;
    const text = req.body.text;
    const todoindex = todo.findIndex((todo) => todo.id == todoid);
    if (todoindex < 0) {
        throw new Error("Todo not found ...");
    }
    //updateTodo
    todo[todoindex] = new todo_1.Todo(todo[todoindex].id, text);
    res.status(200).json({
        message: "Todo updated",
        newTodo: todo[todoindex]
    });
};
exports.UpdateTodo = UpdateTodo;
const deleteTodo = (req, res) => {
    const todoid = req.params.todoid;
    const todoindex = todo.findIndex((todo) => todo.id == todoid);
    if (todoindex < 0) {
        throw new Error("Todo not found ...");
    }
    //deleteTodo
    todo.splice(todoindex, 1);
    res.status(200).json({
        message: "todo removed succesfully",
    });
};
exports.deleteTodo = deleteTodo;
