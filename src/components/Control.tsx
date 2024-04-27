import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useTodoStore from "@/store/store";
import { useState } from "react";
import { convertToMMDD } from "@/utils/convertToMMDD";

const Control = () => {
  const [newTodoText, setNewTodoText] = useState("");

  const { addTodo, selectedDate } = useTodoStore();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    newTodoText && addTodo(newTodoText, selectedDate);
    setNewTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-10 gap-2 fixed bottom-0 right-0 left-0 pl-8 pr-8">
      <Input type="text" className="rounded-full" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} placeholder={`${convertToMMDD(selectedDate, true)}에 일정 추가`} />
      <div>
        <Button className="rounded-full shadow-xl " variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default Control;
