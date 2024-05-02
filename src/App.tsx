import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TodoForm from "./Pages/TodoForm";

function App() {
  return (
    <div className="container mx-auto pt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoForm" element={<TodoForm />} />
      </Routes>
    </div>
  );
}

export default App;
