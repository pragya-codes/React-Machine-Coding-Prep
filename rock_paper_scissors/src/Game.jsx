import { useEffect, useState } from "react"

 function Game(){
  const [winner, setWinner]=useState("")
  const [toggle,setToggle] = useState(true)
  const [userChoice, setUserChoice]= useState("😊")
  const [oppChoice, setOppChoice] = useState("😊")
  const [userScore, setUserScore] = useState(0)
  const [oppScore, setOppScore] = useState(0)
  const [tie, setTie]= useState(false)
  const opp = ["ROCK", "PAPER", "SCISSORS"]
  
  function choice(arg){
    let random = Math.floor(Math.random()*3)
    let newOpp=opp[random]
    setUserChoice(arg) //this will be batched and will shown updated next re render 
    setOppChoice(newOpp)

    //console.log(userScore, oppScore)//this will show stale data because state is updated asynchrly via state setter
    
    if (arg===newOpp){ //now these 2 values are immediately available in a particular render
      setTie(true)
    }

    else
    {
       setTie(false)
      switch(arg){
        case "ROCK":
          if(newOpp==="PAPER") 
            {setOppScore((prev)=>prev+1)}
          else 
            {setUserScore((prev)=>prev+1)}
          break;
        
        case "PAPER":
          if(newOpp==="ROCK") 
            {setUserScore((prev)=>prev+1)}
          else 
            {setOppScore((prev)=>prev+1)}
          break;

        case "SCISSORS":
          if(newOpp==="ROCKS") 
            {setOppScore((prev)=>prev+1)}
          else 
            {setUserScore((prev)=>prev+1)}
          break;
    }
  }

  }
  
  function endgame(){
    setToggle(false)
    if(userScore>oppScore){
        setWinner("YOU")
      } else if(userScore===oppScore){
        setWinner("TIE - NOBODY")
      } else{
        setWinner("RIVAL")
      }
  }

  function reset(){
  setWinner("")
  setToggle(true)
  setUserChoice("😊")
  setOppChoice("😊")
  setUserScore(0)
  setOppScore(0)
  setTie(false)
  }
  return (
    <div className="container bg-cyan-400 p-10 h-4/5 w-3/4 mt-28 rounded-3xl">
  
    <h1 className="text-4xl font-bold pb-3 text-center">ROCK PAPER SCISSORS!</h1>
        <div className="p-4 flex justify-around">
        <button className="bg-yellow-200 text-xl font-bold w-1/4 p-2 rounded-lg hover:bg-yellow-300 active:bg-black active:text-yellow-100 cursor-pointer" onClick={()=>choice("ROCK")}>Rock 🗻</button>

        <button className="bg-yellow-200 text-xl font-bold w-1/4 p-2 rounded-lg hover:bg-yellow-300 active:bg-black active:text-yellow-100 cursor-pointer" onClick={()=>choice("PAPER")}> Paper 📄</button>

        <button className="bg-yellow-200 text-xl font-bold w-1/4 p-2 rounded-lg hover:bg-yellow-300 active:bg-black active:text-yellow-100 cursor-pointer" onClick={()=>choice("SCISSORS")}>Scissors ✂</button>
      </div>

      <div className="text-center text-xl font-bold bg-black text-yellow-300" style={tie? {display:"block"}:{opacity:0}}>Tie!</div>
      
      <div className="p-3 border-2 border-black grid  grid-cols-2  ">
        <div className="border-r-2 border-black text-xl font-bold">YOU</div>
        <div className=" pl-3 text-xl font-bold">RIVAL</div>
        <div className="border-r-2 border-black grid grid-cols-2 font-bold">
          <p>Choice:</p>
        <div>{userChoice}</div>
        <div>Score:</div><
            div>{userScore}</div>
        
        </div>
        <div className=" pl-3 grid grid-cols-2 font-bold">
          <p>Choice:</p>
        <div>{oppChoice}</div>
        <div>Score:</div>
        <div>{oppScore}</div>
        </div>
        
      </div>
      {toggle?<div className="text-center text-xl font-bold bg-black text-yellow-300 cursor-pointer" onClick={endgame}>END GAME</div>
      :       
      <div className="flex flex-col">
      <div className="text-center text-xl font-bold bg-black text-yellow-300" >{winner} WON !!</div>
      <div className="text-center text-xl font-bold text-black bg-yellow-300 cursor-pointer" onClick={reset}>PLAY AGAIN?</div>
      </div>}
    </div>
  )
}

export default Game