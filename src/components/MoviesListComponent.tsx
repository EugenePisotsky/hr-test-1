import * as React from 'react';
import {useStores} from "../hooks/useStores";
import {MovieModel, sortMovies} from "../stores/MoviesStore";
import {observer} from "mobx-react";

export function MovieRow({ movie }: { movie: MovieModel }) {
    return <tr>
        <td>{ movie.name }</td>
        <td>{ movie.rating }</td>
        <td>{ movie.duration }</td>
    </tr>
}

export const MoviesListComponent = observer(() => {
    const { moviesStore } = useStores();
    const { searchMode, searchResults, movies } = moviesStore;

    const sortedMovies = sortMovies(searchMode ? searchResults : movies)

    return <>
        <table id={'directory-table'}>
            { sortedMovies.length > 0 && (
                <>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ratings</th>
                        <th>Duration</th>
                    </tr>
                    </thead>
                    <tbody>
                    { sortedMovies.map((movie) => <MovieRow movie={movie} key={movie.name} />) }
                    </tbody>
                </>
            ) }
        </table>

        { !searchResults.length && <div id={'no-result'}>No Results Found</div> }
    </>
})