import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";



const MovieLists = () => {
    const [movies, setMovies] = useState([])

    const fetchCall = (pageNo) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=91b86d6d565b7ac388d4dde45df6c38f&page=${pageNo}`)
            .then(res => res.json())
            .then(data => setMovies(data.results || []));
    }

    useEffect(() => {
        fetchCall(1);
    }, []);

    return (
        <>
            <div className="movie-lists">
                {
                    movies.map(movie => (
                        <MovieCard movie={movie}/>
                    ))
                }
            </div>
            <Pagination change={fetchCall}/>
        </>
        
    )
}

export default MovieLists;