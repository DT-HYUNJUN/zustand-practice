import React, { useEffect } from "react";
import { Calendar } from "./ui/calendar";
import useTodoStore from "@/store/store";
import { ko } from "date-fns/locale";
import { Button } from "./ui/button";

const TodoCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const updateDate = useTodoStore((state) => state.updateDate);

  useEffect(() => {
    date && updateDate(date);
  }, [date]);

  return (
    <div>
      <div className="text-end mb-2">
        <Button onClick={() => setDate(new Date())} variant="outline" size="today">
          {new Date().getDate()}
        </Button>
      </div>
      <Calendar mode="single" selected={date} onSelect={setDate} locale={ko} className="rounded-md border" />
    </div>
  );
};

export default TodoCalendar;
