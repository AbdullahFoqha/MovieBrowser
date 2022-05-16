import Movie from "./movie";

export default interface MoviesResponse {
    status: string
    status_message: string
    data: Data
}

export interface Data {
    movie_count: number
    limit: number
    page_number: number
    movies: Movie[]
}
