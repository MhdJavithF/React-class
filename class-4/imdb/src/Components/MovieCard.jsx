import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    return(
        <div className="movie-card">
            <Link to={`/movie-detail/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/></Link>
            <Link to={`/movie-detail/${movie.id}`}><h4>{movie.title}</h4></Link>
        </div>
    )
}

export default MovieCard;