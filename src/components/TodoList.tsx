import { Trash2Icon } from "lucide-react";
import useTodoStore from "../store/store";
import TodoCalendar from "./TodoCalendar";
import { Checkbox } from "./ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";

const TodoList = () => {
  const { todoList, checkTodo, removeTodo } = useTodoStore();

  return (
    <div className="flex lg:flex-wrap-reverse">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">완료</TableHead>
            <TableHead>할 일</TableHead>
            <TableHead className="w-[100px] text-center">날짜</TableHead>
            <TableHead className="w-[50px] text-center">삭제</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoList
            .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0))
            .map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="text-center">
                  <Checkbox onCheckedChange={() => checkTodo(todo.id)} checked={todo.isDone} />
                </TableCell>
                <TableCell>{todo.todo}</TableCell>
                <TableCell className="text-center">{todo.date}</TableCell>
                <TableCell className="text-center">
                  <Button onClick={() => removeTodo(todo.id)} type="submit" variant="ghost" size="icon">
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TodoCalendar />
    </div>
  );
};

export default TodoList;
