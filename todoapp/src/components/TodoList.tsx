import React from "react"
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {  DeleteIcon } from "lucide-react";
type    TodoListProps  ={
  items:{id:string,text:string}[];
  onRemoveTodo:(todoId:string) => void;
}

const TodoList:React.FC<TodoListProps>= (props) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 my-5">
    {
      props.items.map(todo => (
        <Card key={todo.id} className="shadow-md rounded-lg bg-white dark:bg-gray-800 p-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-200">{todo.text}</CardTitle>
            <Button 
            onClick={()=>props.onRemoveTodo(todo.id)} 
              className="h-8 w-8 transition-all duration-400 hover:bg-red-600" 
              variant="destructive" 
              size="icon"
            > 
              <DeleteIcon className="text-white"/>
            </Button>
          </CardHeader>
        </Card>
      ))
    }
  </div>
  
  )
}

export default TodoList
