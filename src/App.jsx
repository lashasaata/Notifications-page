import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";
import Message from "./components/Message";
import Data from "../data.json";

function App() {
  const [newData, setnewData] = useState(Data);

  return (
    <div className="flex items-center justify-center min-w-full min-h-screen">
      <main className="flex flex-col">
        <Notification newData={newData} setnewData={setnewData} />
        <Message newData={newData} setnewData={setnewData} />
        <div></div>
      </main>
    </div>
  );
}

export default App;
