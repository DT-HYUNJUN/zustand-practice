import TodoList from "./TodoList";
import TodoCalendar from "./TodoCalendar";

const Todo = () => {
  return (
    <div className="min-h-[calc(100vh-12rem)]">
      <div className="space-y-4 md:flex md:gap-4">
        <TodoCalendar />
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
