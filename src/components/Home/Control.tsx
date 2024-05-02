import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useTodoStore from "@/store/store";
import { useState } from "react";
import { convertToMMDD } from "@/utils/formatDate";
import { useNavigate } from "react-router-dom";

const Control = () => {
  const [newTodoText, setNewTodoText] = useState("");

  const navigate = useNavigate();

  const addTodo = useTodoStore((state) => state.addTodo);
  const selectedDate = useTodoStore((state) => state.selectedDate);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    newTodoText ? addTodo(newTodoText) : navigate("/todoForm");
    setNewTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 h-12">
      <Input
        type="text"
        className="rounded-full h-full"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder={`${typeof selectedDate === "object" && convertToMMDD(selectedDate, true)}에 일정 추가`}
      />
      <div>
        <Button className="rounded-full shadow-xl w-12 h-12" variant="outline" size="icon">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </form>
  );
};

export default Control;
