import { convertToYMD } from "@/utils/formatDate";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const data = {
  "2024-05-01": [
    { id: 0, todo: "first todo", isDone: true, date: new Date().getTime() },
    { id: 1, todo: "sec todo", isDone: true, date: new Date().getTime() },
  ],
  "2024-05-03": [{ id: 0, todo: "first todo", isDone: true, date: new Date().getTime() }],
};

export interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
  date: number;
}
interface ITodoDate {
  [key: string]: ITodo[];
}

interface TodoState {
  todoList: ITodoDate;
  selectedDate: Date;
  addTodo: (newTodoText: string) => void;
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
  updateDate: (clickedDate: Date) => void;
}

const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set, get) => ({
        todoList: data,
        selectedDate: new Date(),
        addTodo: (newTodoText: string) => {
          const formattedDate = convertToYMD(get().selectedDate);
          const newTodo: ITodo = {
            id: get().todoList[formattedDate] ? get().todoList[formattedDate].length : 0,
            todo: newTodoText,
            isDone: false,
            date: get().selectedDate.getTime(),
          };
          let newTodoListDate = [];
          if (get().todoList[formattedDate]) {
            newTodoListDate = [...get().todoList[formattedDate], newTodo];
          } else {
            newTodoListDate = [newTodo];
          }
          const final = get().todoList;
          final[formattedDate] = newTodoListDate;
          set(() => ({ todoList: final }));

          console.log(get().todoList);
        },
        removeTodo: (id) => {
          const fDate = convertToYMD(get().selectedDate);
          const removedTodo = get().todoList[fDate].filter((todo) => todo.id !== id);
          get().todoList[fDate] = removedTodo;
          set((state) => ({ todoList: state.todoList }));
          console.log(get().todoList[fDate]);
        },
        checkTodo: (id) => {
          const fDate = convertToYMD(get().selectedDate);
          const targetId = get().todoList[fDate].findIndex((todo) => todo.id === id);
          const updatedTodo = {
            ...get().todoList[fDate][targetId],
            isDone: !get().todoList[fDate][targetId].isDone,
          };
          get().todoList[fDate][targetId] = updatedTodo;
          set((state) => ({ todoList: state.todoList }));
          console.log(get().todoList[fDate][targetId]);
        },
        updateDate: (clickedDate) => set(() => ({ selectedDate: clickedDate })),
      }),
      { name: "todoStore" }
    )
  )
);

export default useTodoStore;
