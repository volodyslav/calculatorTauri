import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";


function App() {
    const [output, setOutput] = useState("0")
    const [dark, setDark] = useState(false)

    //Colors
    const darkTop = `rounded-md  bg-gray-800 hover:bg-gray-700 text-white text-2xl p-2`
    const lightTop = `rounded-md  bg-blue-800 hover:bg-blue-700 text-white text-2xl p-2`

    const darkNumbers = `rounded-md bg-gray-800 hover:bg-gray-700 text-white text-2xl p-2`
    const lightNumbers = `bg-blue-500 rounded-md hover:bg-blue-400 text-white text-2xl p-2 `

    const darkSignBig = `rounded-md row-span-2 bg-gray-800 hover:bg-gray-700 text-white text-2xl p-2`
    const lightSignBig = `bg-blue-800 rounded-md hover:bg-blue-700 text-white text-2xl p-2 row-span-2`

    const darkSign = `rounded-md bg-gray-800 hover:bg-gray-700 text-white text-2xl p-2`
    const lightSign = `bg-blue-800 rounded-md hover:bg-blue-700 text-white text-2xl p-2 `


    useEffect(()=>{
      if(output === "NaN"){
        setOutput("0")
      }
    }, [output])
    

    const handleDarkMode = () => {
      if(dark === false){
        setDark(true)
      }else if(dark === true){
        setDark(false)
      }
      
    }

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
        setOutput("0")
      }
    };

    console.log(output)
    return (
      <div className={dark?` bg-gray-400 min-h-screen`:` bg-opacity-20 bg-gray-200 min-h-screen`}>
      <div className="flex">
          <button  onClick={handleDarkMode}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" cursor-pointer w-12 h-12 ml-4 hover:scale-110 duration-200 ease-in-out">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg></button>
        <div id="screen" className={dark ? `text-white text-lg bg-slate-800 rounded-xl mx-auto w-5/6  p-4 my-6 lg:h-20  lg:text-4xl sm:text-2xl text-right` : `  bg-white text-slate-800 rounded-xl mx-auto w-5/6  p-4 my-6 lg:h-20 text-lg lg:text-4xl sm:text-3xl text-right`}>
        {output.toString()}</div></div>
        <div className=" grid grid-cols-4 gap-1 m-2">
          <button onClick={handleClear} className= {dark? darkTop:lightTop}>CE</button>
          <button onClick={handleDeleteOne} className= {dark? darkTop:lightTop}>C</button>
          <button onClick={() => setOutput((output ** 2).toString())} className= {dark? darkTop:lightTop}>x²</button>
          <button onClick={() => setOutput(Math.sqrt(output).toString())} className= {dark? darkTop:lightTop}>√</button>
          <button onClick={() => setOutput(Math.sin(output).toString())} className= {dark? darkTop:lightTop}>sin</button>
          <button onClick={() => setOutput(Math.cos(output).toString())} className= {dark? darkTop:lightTop}>cos</button>
          <button onClick={() => setOutput(Math.tan(output).toString())} className= {dark? darkTop:lightTop}>tan</button>
          <button onClick={() => setOutput(Math.atan(output).toString())} className= {dark? darkTop:lightTop}>atan</button>
          <button onClick={() => setOutput(Math.log10(output).toString())} className= {dark? darkTop:lightTop}>log10</button>
          <button onClick={() => setOutput(Math.log(output).toString())} className= {dark? darkTop:lightTop}>log</button>
          <button onClick={() => setOutput(Math.log2(output).toString())} className= {dark? darkTop:lightTop}>log2</button>
          <button onClick={() => setOutput(Math.exp(output).toString())} className= {dark? darkTop:lightTop}>exp</button>
          <button onClick={() => setOutput(Math.ceil(output).toString())} className= {dark? darkTop:lightTop}>ceil</button>
          <button onClick={() => setOutput(Math.floor(output).toString())} className= {dark? darkTop:lightTop}>floor</button>
          <button onClick={() => setOutput(Math.abs(output).toString())} className= {dark? darkTop:lightTop}>abs</button>
          <button onClick={() => setOutput((1/output).toString())} className= {dark? darkTop:lightTop}>1/x</button>
          <button onClick={() => handleLogic("*")} className= {dark?darkSignBig :lightSignBig}>*</button>
          <button onClick={() => handleLogic("1")} className= {dark?darkNumbers :lightNumbers}>1</button>
          <button onClick={() => handleLogic("2")} className= {dark?darkNumbers :lightNumbers}>2</button>
          <button onClick={() => handleLogic("3")} className= {dark?darkNumbers :lightNumbers}>3</button>
          
          
          <button onClick={() => handleLogic("4")} className= {dark?darkNumbers :lightNumbers}>4</button>
          <button onClick={() => handleLogic("5")} className= {dark?darkNumbers :lightNumbers}>5</button>
          <button onClick={() => handleLogic("6")}  className= {dark?darkNumbers :lightNumbers}>6</button>
          <button onClick={handleCalculate} className= {dark?darkSignBig :lightSignBig}>=</button>
          <button onClick={() => handleLogic("7")}  className= {dark?darkNumbers :lightNumbers}>7</button>
          <button onClick={() => handleLogic("8")} className= {dark?darkNumbers :lightNumbers}>8</button>
          <button onClick={() => handleLogic("9")} className= {dark?darkNumbers :lightNumbers}>9</button>

          <button onClick={() => handleLogic(".")} className= {dark?darkNumbers :lightNumbers}>.</button>
          
          <button onClick={() => handleLogic("0")} className= {dark?darkNumbers :lightNumbers}>0</button>
          <button onClick={() => setOutput((output * -1).toString())} className= {dark?darkNumbers :lightNumbers}>+/-</button>
          <button onClick={() => handleLogic("/")} className= {dark? darkSign:lightSign}>/</button>
          <button onClick={() => handleLogic("+")} className= {dark? darkSign:lightSign}>+</button>
          <button onClick={() => handleLogic("-")} className= {dark? darkSign:lightSign}>-</button>
          <button onClick={() => handleLogic("%")} className= {dark? darkSign:lightSign}>%</button>
        </div>
      </div>
    );
}

export default App;
