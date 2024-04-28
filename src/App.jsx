import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-orange-300 text-3xl p-3 text-center">To-Do App</h1>
    </>
  );
}

export default App;
