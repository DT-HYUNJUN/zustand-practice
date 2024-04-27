import TodoList from "./TodoList";
import TodoCalendar from "./TodoCalendar";
import Control from "./Control";

const Home = () => {
  return (
    <div>
      <div className="space-y-4">
        <TodoCalendar />
        <TodoList />
      </div>
      <Control />
    </div>
  );
};

export default Home;
