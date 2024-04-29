import React, { useEffect } from "react";
import { Calendar } from "./ui/calendar";
import useTodoStore from "@/store/store";
import { Button } from "./ui/button";

const TodoCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const updateDate = useTodoStore((state) => state.updateDate);

  const handleClickToday = () => {
    setDate(new Date());
  };

  useEffect(() => {
    date && updateDate(date);
  }, [date]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end">
        <Button onClick={handleClickToday} variant="outline" size="today">
          {new Date().getDate()}
        </Button>
      </div>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
    </div>
  );
};

export default TodoCalendar;
