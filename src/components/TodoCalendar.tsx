import React, { useEffect } from "react";
import { Calendar } from "./ui/calendar";
import useTodoStore from "@/store/store";

const TodoCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const updateDate = useTodoStore((state) => state.updateDate);

  useEffect(() => {
    date && updateDate(date);
  }, [date]);

  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
    </div>
  );
};

export default TodoCalendar;
