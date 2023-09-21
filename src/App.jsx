import { useState } from "react";
import Btn from "./components/btn";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen">
        <div
          className="w-full h-screen flex p-5 justify-evenly"
          style={{ backgroundColor: color }}
        >
          <div className="bg-gray-100 px-10 flex flex-col justify-around items-center rounded-xl">
            <Btn color="olive" setColor={setColor} />
            <Btn color="lightseagreen" setColor={setColor} />
            <Btn color="brown" setColor={setColor} />
            <Btn color="indigo" setColor={setColor} />
            <Btn color="hotpink" setColor={setColor} />
            <Btn color="royalblue" setColor={setColor} />
            <Btn color="lightcoral" setColor={setColor} />
            <Btn color="goldenrod" setColor={setColor} />
            <Btn color="midnightblue" setColor={setColor} />
            <Btn color="darkgoldenrod" setColor={setColor} />
          </div>
          <div className="gap-2 text-6xl select-none text-black self-center bg-gray-100 p-4 rounded-2xl flex justify-center items-center flex-col">
            <h3>
              Background
            </h3>
            <h3>
              Colour
            </h3>
            <h3>
              Changer
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
