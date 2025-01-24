import { ChangeEvent, FormEvent} from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react";

type AddTodoProps={
  onaddTodo:(todoText:string) => void
}
const AddTodo:React.FC<AddTodoProps>=(props) => {

  const [text,setText]=useState<string>("");

  const ChangeEventHandler=(event:ChangeEvent<HTMLInputElement>)=> {
    setText(event.target.value);}

    const onsubmithandler=(event:FormEvent)=>{
      event.preventDefault();
      props.onaddTodo(text);
      setText("");}

  return (
    <form onSubmit={onsubmithandler} className="flex items-center  gap-5 ">
   <Input onChange={ChangeEventHandler} value={text} className="w-fit" type="text"   placeholder="Write a new Todo..."></Input>
     <Button >Add Todo</Button>
    </form>
  )
}

export default AddTodo
