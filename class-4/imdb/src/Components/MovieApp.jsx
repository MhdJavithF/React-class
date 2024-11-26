import AddMovie from "./AddMovie";
import Heading from "./Heading";
import MovieDetails from "./MovieDetails";
import MovieLists from "./MovieLists";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
            <Heading/>
            <MovieLists/>
        </>
      )
    },
    {
        path: "/add-movie",
        element: (
          <>
              <Heading/>
              <AddMovie/>
          </>
        )
      },
      {
        path: "/movie-detail",
        element: (
          <>
              <Heading/>
              <div>
                <h1 style={{textAlign:"center",color:"white"}}>Please click the movie card separately
                  <p>to view the movie details.</p>
                </h1>
              </div>
          </>
        )
      },
      {
        path: "/movie-detail/:movieId",
        element: (
          <>
              <Heading/>
              <MovieDetails/>
          </>
        )
      }
  ]);

const MovieApp = () => {
    return(
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default MovieApp;    