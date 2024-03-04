import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-w-full min-h-screen">
      <main className="flex flex-col">
        <Notification />
        <div></div>
      </main>
    </div>
  );
}

export default App;
