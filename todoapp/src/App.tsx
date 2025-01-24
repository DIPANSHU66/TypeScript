
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Todo } from './Types/Todo'


function App() {

const [todos,settodos]=useState<Todo[]>([]);

const addTodoHandler=(text:string) => {
const id=Math.random().toString();
settodos([...todos,{id,text}]);}


const removetodohandler=(todoid:string)=>{
const newTodo=todos.filter((todo:Todo)=>todo.id!==todoid)
settodos(newTodo);
};

  return (
    <main className='max-w-6xl mx-auto  my-10'>
    <AddTodo  onaddTodo={addTodoHandler}></AddTodo>
    <TodoList  onRemoveTodo={removetodohandler} items={todos}></TodoList>
    </main>
  );
}

export default App;
