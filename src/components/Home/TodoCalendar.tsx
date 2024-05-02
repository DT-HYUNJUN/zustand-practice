import React, { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import useTodoStore from "@/store/store";
import { ko } from "date-fns/locale";
import { Button } from "../ui/button";

const TodoCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const updateDate = useTodoStore((state) => state.updateDate);
  const todoList = useTodoStore((state) => state.todoList);

  useEffect(() => {
    date && updateDate(date);
  }, [date]);

  return (
    <div className="">
      <div className="text-end mb-2">
        <Button onClick={() => setDate(new Date())} variant="outline" size="today">
          {new Date().getDate()}
        </Button>
      </div>
      <Calendar toodList={todoList} mode="single" selected={date} onSelect={setDate} locale={ko} className="rounded-md border" />
    </div>
  );
};

export default TodoCalendar;
