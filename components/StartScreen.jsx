import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <div className="title">
          <h1>Secret</h1>
          <h1 className="secondH1">WO<span>R</span>D</h1>
        </div>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen