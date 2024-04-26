import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useTodoStore from "@/store/store";
import { useState } from "react";

const Control = () => {
  const [newTodoText, setNewTodoText] = useState("");

  const { addTodo, selectedDate } = useTodoStore();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodoText, selectedDate);
    setNewTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-10 gap-2">
      <Input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} placeholder="할 일을 추가해보세요!" />
      <Button type="submit" variant="outline" size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default Control;
