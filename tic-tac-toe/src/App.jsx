import { useState } from "react"

function App() {
const [winner, setWinner] = useState("")
const [cell, setCell]=useState(Array(9).fill(null))
const [curr, setCurr]=useState("X")
const [toggle, setToggle]=useState(false)
function checkWinner(){
  const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let i=0;i<win.length;i++) {
    const [a,b,c]=win[i]
    if(cell[a] !== null && cell[a]=== cell[b] && cell[a]===cell[c]) return cell[a]
     
  }
  return false;
}


function handleClick(index){
 // setCell(cell[index]="X")//mutating state directly hence didnt work
if(cell[index]!==null || winner) return

 const cellCopy = Array.from(cell)
 cellCopy[index]=curr
 const win = checkWinner()
 if (win){
  setWinner(win)
  setToggle(true)
  return 
 } 

 setCell(cellCopy)
 setCurr(curr==="X"? "0":"X")

 
}

function handleReset(){
setWinner("")
setCell(Array(9).fill(null))
setCurr("X")
setToggle(false)
}

function Block({onClick, value}){
    return <div className="h-28 flex justify-center items-center border-2 border-black font-bold text-xl  hover:bg-yellow-500 hover:text-black  active:bg-black active:text-white" onClick={onClick}>
     {value}
    </div>
  }
  return (
    <div className="bg-yellow-300 h-screen">
      <h1 className="pt-10 text-4xl font-bold text-center">
      Tic Tac Toe
    </h1>
    {toggle?<p className="text-red-600  text-center font-extrabold p-4 text-xl">PLAYER - {winner} has WON! 💯</p>: <p className="text-center font-bold p-4">Next Player : {curr}</p>}
    <div className="mt-3 mx-auto w-96 grid grid-cols-3 ">
      <Block onClick={()=>handleClick(0)} value={cell[0]}/>
      <Block onClick={()=>handleClick(1)} value={cell[1]}/>
      <Block onClick={()=>handleClick(2)} value={cell[2]}/>
      <Block onClick={()=>handleClick(3)} value={cell[3]}/>
      <Block onClick={()=>handleClick(4)} value={cell[4]}/>
      <Block onClick={()=>handleClick(5)} value={cell[5]}/>
      <Block onClick={()=>handleClick(6)} value={cell[6]}/>
      <Block onClick={()=>handleClick(7)} value={cell[7]}/>
      <Block onClick={()=>handleClick(8)} value={cell[8]}/>

    </div>
    <div className="mx-auto border-2 border-black mt-6 flex justify-center items-center h-10 w-16 font-bold cursor-pointer hover:bg-black hover:text-white" onClick={handleReset}>RESET</div>
    </div>
  )
}

export default App
