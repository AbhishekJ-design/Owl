import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Genres {
    id: number,
    name: string
}

interface FetchGenres {
    count: number,
    results: Genres[]
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGenres>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results)
                setLoading(false)
            })

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
}


export default useGenres