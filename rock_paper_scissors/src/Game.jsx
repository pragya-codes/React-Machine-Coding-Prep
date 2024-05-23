import { useEffect, useState } from "react"

 function Game(){
  const [userChoice, setUserChoice]= useState("")
  const [oppChoice, setOppChoice] = useState("")
  const [userScore, setUserScore] = useState(0)
  const [oppScore, setOppScore] = useState(0)
  const [tie, setTie]= useState(false)
  const opp = ["R", "P", "S"]
  
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
      switch(arg){
        case "R":
          if(newOpp==="P") 
            {setOppScore((prev)=>prev+1)}
          else 
            {setUserScore((prev)=>prev+1)}
          break;
        
        case "P":
          if(newOpp==="R") 
            {setUserScore((prev)=>prev+1)}
          else 
            {setOppScore((prev)=>prev+1)}
          break;

        case "S":
          if(newOpp==="R") 
            {setOppScore((prev)=>prev+1)}
          else 
            {setUserScore((prev)=>prev+1)}
          break;
    }
  }

  }
    
  return (
    <>
        <div className="choose">
        <button onClick={()=>choice("R")}>Rock 🗻</button>
        <button onClick={()=>choice("P")}> Paper 📄</button>
        <button onClick={()=>choice("S")}>Scissors ✂</button>
      </div>
      <div className="tie" style={tie? {display:"block"}:{display:"none"}}>Tie!</div>
      <p>Your Choice:{userChoice}</p>
      <p>Computer Choice:{oppChoice}</p>
      <div className="score">
        Your Score: {userScore}
        Computer Score: {oppScore}
      </div>
    </>
  )
}

export default Game