import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient';
import useData from './useData';

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
    metacritic: number

}

const fetchGames = () => useData<Game>('/games')


export default fetchGames