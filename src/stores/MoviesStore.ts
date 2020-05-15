import { action, computed, observable } from 'mobx'

export interface MovieModel {
    name: string
    rating: number
    duration: string
}

export const timeToMinutes = (time: string) => {
    const t = parseFloat(time)

    return time.endsWith('h') ? t * 60 : t
}

export const sortMovies = (movies: MovieModel[]) => {
    const sortedMovies = [...movies]

    sortedMovies.sort((a, b) => {
        const aDuration = timeToMinutes(a.duration)
        const bDuration = timeToMinutes(b.duration)

        if (aDuration > bDuration) {
            return -1
        } else if (aDuration < bDuration) {
            return 1
        }

        return 0
    })

    return sortedMovies
}

export class MoviesStore {
    @observable movies: MovieModel[] = []
    @observable query = ''

    get isSearchMode() {
        return this.query.length > 1
    }

    @computed
    get searchResults() {
        if (!this.isSearchMode) {
            return this.movies
        }

        return this.movies.filter((item) =>
            item.name.toLowerCase().includes(this.query.toLowerCase())
        )
    }

    @computed
    get sortedMovies() {
        return sortMovies(this.isSearchMode ? this.searchResults : this.movies)
    }

    @action
    addMovie(movie: MovieModel) {
        if (
            !movie.duration.match(/[0-9.]+[hm]{1}/g) ||
            isNaN(Number(movie.rating))
        ) {
            return
        }

        const existingMovieIndex = this.movies.findIndex(
            (item) => item.name === movie.name
        )

        if (existingMovieIndex > -1) {
            this.movies[existingMovieIndex] = movie
        } else {
            this.movies.push(movie)
        }
    }

    @action
    search(query: string) {
        this.query = query
    }
}
