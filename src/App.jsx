import { useState } from "react"

function App() {
  
  const [color,setcolor] = useState("olive"); 

  return (
    <>

      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

{/* Button Red */}
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "red" }} onClick={() => setcolor("red")}>Red</button>

{/* Button Green */}
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "green" }} onClick={() => setcolor("green")}>Green</button>

{/* Button Brown */}
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "#b45309" }}onClick={() => setcolor("#b45309")}>Brown</button>

{/* Button Blue */}
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "#1d4ed8" }} onClick={() => setcolor("#1d4ed8")}>Blue</button>

{/* Button violet */}
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "#a21caf" }} onClick={() => setcolor("#a21caf")}>violet</button>

{/* Button Orange */}
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "#f97316" }} onClick={() => setcolor("#f97316")}>Orange</button>

{/* Button Grey */}
<button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "#9ca3af" }} onClick={() => setcolor("#9ca3af")}>Grey</button>
            
            </div>
          </div>
      </div>
    </>
  )
}

export default App
