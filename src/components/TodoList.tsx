import { convertToYMD } from "@/utils/formatDate";
import useTodoStore from "../store/store";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

const TodoList = () => {
  const { selectedDate, todoList, checkTodo, removeTodo } = useTodoStore();
  const select = convertToYMD(selectedDate);
  return (
    <div className="flex-grow">
      {todoList[select] ? (
        todoList[select].map((todo) => (
          <div key={todo.id} className="flex items-center gap-4 group hover:bg-slate-300">
            <Checkbox className="rounded-full" onCheckedChange={() => checkTodo(todo.id)} checked={todo.isDone} />
            <p className={todo.isDone ? "line-through text-slate-400 flex-grow" : "flex-grow"}>{todo.todo}</p>
            <Button onClick={() => removeTodo(todo.id)} className="invisible group-hover:visible h-4 w-4" variant="ghost" size="icon">
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </div>
        ))
      ) : (
        <div className="text-slate-400  text-center">일정이 없습니다.</div>
      )}
    </div>
  );
};

export default TodoList;
