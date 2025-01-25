import express from "express"
const   router=express.Router()
import { CreateTodo,gettodo,UpdateTodo,deleteTodo} from "../Controllers/todo"
router.route("/").post(CreateTodo)    //create todo
router.route("").get(gettodo)  //  gettodo
router.route("/:todoid").patch(UpdateTodo)      //  updatetodo
router.route("/:todoid").delete(deleteTodo)          //deleteid

export  default router
