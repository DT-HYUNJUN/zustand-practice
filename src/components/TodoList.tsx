import useTodoStore from "../store/store";
import { Checkbox } from "./ui/checkbox";

const TodoList = () => {
  const { todoList, checkTodo } = useTodoStore();

  return (
    <div className="flex-grow">
      {todoList
        .sort((a, b) => a.date - b.date)
        .map((todo) => (
          <div key={todo.id} className="flex items-center gap-4">
            <Checkbox className="rounded-full" onCheckedChange={() => checkTodo(todo.id)} checked={todo.isDone} />
            <p className={todo.isDone ? "line-through text-slate-400" : ""}>{todo.todo}</p>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
