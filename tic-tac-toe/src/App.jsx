function App() {

  function Block({value}){
    return <div className="h-28 flex justify-center items-center border-2 border-black font-bold text-xl">
     {value}
    </div>
  }
  return (
    <div className=" ">
      <h1 className="mt-28 text-3xl font-bold text-center">
      Tic Tac Toe
    </h1>
    <div className="mt-3 mx-auto w-1/3 grid grid-cols-3 border-2 border-black">
      <Block value={"gyy"}/>
      <Block/>
      <Block/>
      <Block/>
      <Block value={"hhh"}/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>

    </div>
    <div className="mx-auto border-2 border-black mt-6 flex justify-center items-center h-10 w-16 font-bold">RESET</div>
    </div>
  )
}

export default App
