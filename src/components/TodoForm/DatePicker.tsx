import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import useTodoStore from "@/store/store";
import { ko } from "date-fns/locale";

const DatePicker = () => {
  const [date, setDate] = useState<Date>();

  const selectedDate = useTodoStore((state) => state.selectedDate);
  const updateDate = useTodoStore((state) => state.updateDate);

  useEffect(() => {
    date && updateDate(date);
  }, [date]);

  return (
    selectedDate && (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? format(selectedDate, "PPP", { locale: ko }) : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
    )
  );
};

export default DatePicker;
