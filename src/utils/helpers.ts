import { MovieModel } from "../stores/MoviesStore";

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