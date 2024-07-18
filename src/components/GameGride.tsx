import useGames from "../hooks/useGames";


const GameGride = () => {
   
  const {games,error} = useGames();
  
  return (
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default GameGride
