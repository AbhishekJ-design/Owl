import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient';

export interface Platform {
    id: number,
    name: string,
    slug: string

}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[]
}

interface FetchGames {
    count: number,
    results: Game[]
}

const fetchGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<FetchGames>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))

        return () => controller.abort();
    }, []);

    return { games, error };
}

export default fetchGames