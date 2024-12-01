import { useEffect, useState } from "react";
import Heading from "./Heading";

const MovieFavourites = () => {
    let genreids = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };

    const [favMovieList, setFavMovieList] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectGenre, setSelectGenre] = useState("");

    useEffect(() => {
        const favouriteData = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavMovieList(favouriteData);

        const genreData = favouriteData.map(data => data.genre_ids[0]);
        setGenres(Array.from(new Set(genreData)));
    },[])

    const handleSelectGenre = (e) => {
        setSelectGenre(e.target.dataset.id)
    }

    return (
        <div>
            <Heading watchlistCount={favMovieList.length}/>
            <h2 id="fav-head">Favourite Movies</h2>
            <div className="fav-wrapper">
                <div className="left-sec">
                    <div className="genres-wrapper">
                        <div className={`genre ${selectGenre == "" ? "selected" : "" }`} onClick={handleSelectGenre} data-id={""} >All Genre</div>
                        {
                            genres.map(genreId => (
                                <div className={`genre ${selectGenre == genreId ? "selected" : "" }`} onClick={handleSelectGenre} data-id={genreId}>{genreids[genreId]}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="right-sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Popularity</th>
                                <th>Rating</th>
                                <th>Acions</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    favMovieList.map((fav) => (
                                        <tr>
                                            <td><img src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`} style={{width:"120px"}}/></td>
                                            <td>{fav.title}</td>
                                            <td>{genreids[fav.genre_ids[0]]}</td>
                                            <td>{fav.popularity}</td>
                                            <td>{fav.vote_average}</td>
                                            <td><button>Remove</button></td>
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default MovieFavourites;