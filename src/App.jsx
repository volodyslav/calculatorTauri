import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";


function App() {
    const [output, setOutput] = useState("0")
    

    const handleLogic = (value) => {
      if(output.length <= 35){
        setOutput((prevOutput) => (prevOutput === '0' && (value !==  "/" && value !== "*" )? value : prevOutput + value));
      }
    }

    const handleDeleteOne = () => {
      setOutput((prev) => (prev.length > 1 ? prev.slice(0, -1).toString() : "0"))
    }

    const handleClear = () => {
      setOutput('0');
    };

    const handleCalculate = () => {
      try {
        setOutput(eval(output).toString());
      } catch (error) {
        setOutput('Error');
      }
    };

    console.log(output.length)
    return (
      <div className="">
        <div id="screen" className="  bg-white text-slate-800 rounded-xl mx-auto w-5/6 p-4 my-6 h-20 text-4xl  text-right">{output.toString()}</div>
        <div className=" grid grid-cols-4 gap-1 m-2">
          <button onClick={handleClear} className=" rounded-md  bg-blue-800 hover:bg-blue-700 text-white text-2xl p-2">CE</button>
          <button onClick={handleDeleteOne} className=" bg-blue-800 hover:bg-blue-700 rounded-md text-white text-2xl p-2">C</button>
          <button onClick={() => setOutput((output ** 2).toString())} className=" bg-blue-800 hover:bg-blue-700 rounded-md text-white text-2xl p-2">x²</button>
          <button onClick={() => setOutput(Math.sqrt(output).toString())} className=" bg-blue-800 hover:bg-blue-700 text-white text-2xl p-2 rounded-md">√</button>
          <button onClick={() => setOutput(Math.sin(output).toString())} className=" bg-blue-800 hover:bg-blue-700 text-white text-2xl p-2 rounded-md" >sin</button>
          <button onClick={() => setOutput(Math.cos(output).toString())} className=" bg-blue-800 hover:bg-blue-700 text-white text-2xl rounded-md p-2">cos</button>
          <button onClick={() => setOutput(Math.tan(output).toString())} className=" bg-blue-800 hover:bg-blue-700 text-white text-2xl rounded-md p-2">tan</button>
          <button onClick={() => setOutput(Math.atan(output).toString())} className=" bg-blue-800 hover:bg-blue-700 text-white rounded-md text-2xl p-2">atan</button>
          <button onClick={() => handleLogic("1")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">1</button>
          <button onClick={() => handleLogic("2")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">2</button>
          <button onClick={() => handleLogic("3")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">3</button>
          <button onClick={() => handleLogic("+")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">+</button>
          <button onClick={() => handleLogic("4")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">4</button>
          <button onClick={() => handleLogic("5")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">5</button>
          <button onClick={() => handleLogic("6")}  className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">6</button>
          <button onClick={() => handleLogic("-")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">-</button>
          <button onClick={() => handleLogic("7")}  className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">7</button>
          <button onClick={() => handleLogic("8")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">8</button>
          <button onClick={() => handleLogic("9")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">9</button>
          <button onClick={() => handleLogic(".")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">.</button>
          <button onClick={handleCalculate} className=" bg-blue-500 hover:bg-blue-400 text-white text-2xl p-2 row-span-2 rounded-md">=</button>
          <button onClick={() => handleLogic("0")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">0</button>
          <button onClick={() => handleLogic("/")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">/</button>
          <button onClick={() => handleLogic("*")} className=" bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2">*</button>
        </div>
      </div>
    );
}

export default App;
