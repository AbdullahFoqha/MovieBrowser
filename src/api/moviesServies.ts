import get from './client'
import {AxiosResponse} from "axios";
import MoviesResponse from "./models/moviesResponse";

const endPoint: string = '/list_movies.json'

export const getMovies = async (genre: string, limit: number = 3): Promise<AxiosResponse<MoviesResponse>> => await get(`${endPoint}?genre=${genre}&limit=${limit}`)


