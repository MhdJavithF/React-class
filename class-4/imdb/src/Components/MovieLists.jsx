import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


const MovieLists = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=91b86d6d565b7ac388d4dde45df6c38f")
        .then(res => res.json())
        .then(data => setMovies(data.results || []));
    }, []);

    return (
        <div className="movie-lists">
            {
                movies.map(movie => (
                    <MovieCard movie={movie}/>
                ))
            }
        </div>
    )
}

export default MovieLists;