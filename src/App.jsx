import React from "react";
import Sidebar from "./Componenets/Sidebar";
import Player from "./Componenets/Player";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
      <Player />
    </div>
  );
};

export default App;
