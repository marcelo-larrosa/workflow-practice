import movies from "./movies.json";
import { MovieCard } from "./MovieCard";

export function MovieGrid(){
    return(
        <>
            <ul>
                {movies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                )}
            </ul>
        </>
    )
}