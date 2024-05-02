import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import useTodoStore from "@/store/store";

import DatePicker from "@/components/TodoForm/DatePicker";
import { convertToMMDD } from "@/utils/formatDate";

const formSchema = z.object({
  todoText: z
    .string()
    .min(1, {
      message: "길이 1 이상",
    })
    .max(50, {
      message: "길이 50 이하",
    }),
});

const TodoForm = () => {
  const navigate = useNavigate();

  const { selectedDate, addTodo } = useTodoStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todoText: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addTodo(values.todoText);
    navigate("/");
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="todoText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{convertToMMDD(selectedDate, true)}할 일</FormLabel>
              <FormControl>
                <Input placeholder="제목" {...field} />
              </FormControl>
              <FormDescription>할 일 적는 공간</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DatePicker />
        <div className="flex items-center justify-evenly">
          <Button onClick={() => navigate(-1)} variant="outline" type="button">
            취소
          </Button>
          <Button type="submit">저장</Button>
        </div>
      </form>
    </Form>
  );
};

export default TodoForm;
