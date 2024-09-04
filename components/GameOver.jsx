import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div className="gameOver">
      <div className="gameOverTop">
        <h1>Fim de Jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
      </div>

      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver