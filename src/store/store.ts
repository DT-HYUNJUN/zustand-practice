import { create } from "zustand";

export interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
  date: number;
}

interface TodoState {
  todoList: ITodo[];
  selectedDate: Date;
  addTodo: (newTodoText: string, selectedDate: Date) => void;
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
  updateDate: (clickedDate: Date) => void;
}

const useTodoStore = create<TodoState>((set, get) => ({
  todoList: [{ id: new Date().getTime(), todo: "first todo", isDone: true, date: new Date().getTime() }],
  selectedDate: new Date(),
  addTodo: (newTodoText: string, selectedDate: Date) => {
    // const newId = get().todoList.length;
    const newId = selectedDate.getTime();
    const newTodo: ITodo = {
      id: newId,
      todo: newTodoText,
      isDone: false,
      date: selectedDate.getTime(),
    };
    set((state) => ({ todoList: [...state.todoList, newTodo] }));
    console.log(get().todoList);
  },
  removeTodo: (id) => set((state) => ({ todoList: state.todoList.filter((todo) => todo.id !== id) })),
  checkTodo: (id) => {
    const updatedTodo = {
      ...get().todoList[id],
      isDone: !get().todoList[id].isDone,
    };
    get().todoList[id] = updatedTodo;
    set((state) => ({ todoList: state.todoList }));
    console.log(get().todoList);
  },
  updateDate: (clickedDate) => set(() => ({ selectedDate: clickedDate })),
}));

export default useTodoStore;
