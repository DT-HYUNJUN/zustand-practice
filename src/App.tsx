import Home from "./components/Home";
// import useTodoStore from "./store/store";

function App() {
  // const selectedDate = useTodoStore((state) => state.selectedDate);
  return (
    <div className="container mx-auto mt-10">
      {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-10">{`${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`} Todo List</h1> */}
      <Home />
    </div>
  );
}

export default App;
