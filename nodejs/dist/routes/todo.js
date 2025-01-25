"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const todo_1 = require("../Controllers/todo");
router.route("/").post(todo_1.CreateTodo); //create todo
router.route("").get(todo_1.gettodo); //  gettodo
router.route("/:todoid").patch(todo_1.UpdateTodo); //  updatetodo
router.route("/:todoid").delete(todo_1.deleteTodo); //deleteid
exports.default = router;
