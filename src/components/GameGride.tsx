import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"


interface Game{
    id: number,
    name: string
}

interface FetchGames {
    count: number,
    results: Game[]
}


const GameGride = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
     apiClient.get<FetchGames>('/games')
      .then(res => setGames(res.data.results))
    })
  return (
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default GameGride
