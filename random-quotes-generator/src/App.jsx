const apikey = import.meta.env.VITE_KEY
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isfetching, setIsFetching] = useState(false)
  const [riddle, setRiddle] = useState({ title: "", riddle: "", answer: "" })
  const [toggle, setToggle] = useState(false)
  const [next, setNext] = useState(false)
  useEffect(() => {
    const url = "https://api.api-ninjas.com/v1/riddles"
    fetch(url, {
      headers: { 'X-Api-Key': apikey }
    }).then(response => response.json()).then(data => { setIsFetching(false); setRiddle({ title: data[0].title, riddle: data[0].question, answer: data[0].answer }) })
    return
  }, [next])

  function handleNext() {
    setIsFetching(true)
    setRiddle({ title: "", riddle: "", answer: "" })
    setToggle(!toggle)
    setNext(!next)
  }
  function handleAnswer() {
    setToggle(!toggle)
  }

  return (
    <div className='container'>
      <h1>Guess the Riddle😍</h1>
      <h3 >{riddle.title}</h3>
      {isfetching ? <p style={{ color: "red", fontWeight: "bold" }}>WAIT...</p>
        :
        <div className="riddle">
          <h2 style={{ fontStyle: "italic", fontFamily: "serif" }}>"{riddle.riddle}"</h2>
          <button className='show' onClick={handleAnswer}>{toggle ? `HIDE ANSWER` : `SHOW ANSWER?`}</button>
          {toggle &&
            <p style={{ fontSize: "small", color: "red", fontWeight: "bold", fontStyle: "italic" }}>{riddle.answer}</p>
          }
        </div>}
      <button className='show' onClick={handleNext}>NEXT RIDDLE!</button>
    </div >
  )
}

export default App
