import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from "react-native";
import {getMovies} from '../api/moviesServies'
import {AxiosResponse} from "axios";
import Movie from "../api/models/movie";
import MoviesResponse from "../api/models/moviesResponse";
import RenderIf from "../utility/renderIf";
import MovieSection from "../components/movieSection";

const Movies: React.FC = () => {
    const [drama, setDrama] = useState<Array<Movie>>();
    const [action, setAction] = useState<Array<Movie>>();
    const [horror, setHorror] = useState<Array<Movie>>();
    const [error, setError] = useState('');

    const fetchTheData = async () => {
        const [
            {
                data: {
                    data: {movies: drama},
                    status: dramaStatus
                }
            },
            {
                data: {
                    data: {movies: action},
                    status: actionStatus
                }
            },
            {
                data: {
                    data: {movies: horror},
                    status: horrorStatus
                }
            }] = await Promise.all([getMovies('drama'), getMovies('action'), getMovies('horror')]);
        if (dramaStatus === 'ok')
            setDrama(drama)
        if (actionStatus === 'ok')
            setAction(action)
        if (horrorStatus === 'ok')
            setHorror(horror)
    }

    useEffect(() => {

        fetchTheData()

        // Promise.all([getMovies('drama'), getMovies('action'), getMovies('horror')]).then(response => {
        //     setDrama(response[0].data.data.movies);
        //     setAction(response[1].data.data.movies);
        //     setHorror(response[2].data.data.movies);
        // });

        // getMovies().then((response: AxiosResponse<MoviesResponse>) => {
        //     let {data: {movies: tempMovies}, status, status_message} = response.data
        //     if (status === 'ok')
        //         setMovies(tempMovies);
        //     else
        //         setError(status_message)
        // })
    })


    return (
        <RenderIf condition={error === ''}>
            <SafeAreaView style={styles.container}>
                <MovieSection movies={action} section={'Action'}/>
                <MovieSection movies={drama} section={'Drama'}/>
                <MovieSection movies={horror} section={'Horror'}/>
            </SafeAreaView>
        </RenderIf>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#181824'
    }
})

export default Movies;
