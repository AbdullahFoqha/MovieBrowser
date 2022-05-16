import get from './client'
import {AxiosResponse} from "axios";
import MoviesResponse from "./models/moviesResponse";

const endPoint: string = '/list_movies.json'

export const getMovies = async (): Promise<AxiosResponse<MoviesResponse>> => await get(`${endPoint}`)


