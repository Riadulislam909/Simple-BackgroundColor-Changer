import { useState } from 'react'


function App() {
  const [color, setColor] = useState("gray")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-'>
      <div className='flex flex-warp justify-center gap-3 shadow-lg bg-yellow-50 px-2 py-2 rounded-lg'>
        <button onClick={()=> setColor("red")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
        style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=> setColor("green")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
        style={{backgroundColor: "green"}}>Green</button>
        <button onClick={()=> setColor("blue")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
        style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={()=> setColor("pink")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
        style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={()=> setColor("black")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
        style={{backgroundColor: "black"}}>Black</button>
        <button onClick={()=> setColor("gold")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
        style={{backgroundColor: "Gold"}}>Gold</button>
      </div>
    </div>
   </div>
  )
}

export default App
