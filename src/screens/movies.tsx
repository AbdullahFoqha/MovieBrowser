import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, Text, View} from "react-native";
import {getMovies} from '../api/movies'
import {AxiosResponse} from "axios";
import Movie from "../api/models/movie";
import MoviesResponse from "../api/models/moviesResponse";
import RenderIf from "../utility/renderIf";
import MovieCard from "../components/movieCard";

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Array<Movie>>();
    const [error, setError] = useState('');

    useEffect(() => {
        getMovies().then((response: AxiosResponse<MoviesResponse>) => {
            let {data: {movies: tempMovies}, status, status_message} = response.data
            if (status === 'ok')
                setMovies(tempMovies);
            else
                setError(status_message)
        })
    })

    const renderMovie = ({item: movie}: ListRenderItemInfo<Movie>) => (
        <MovieCard movie={movie} onPress={() => null}/>
    )

    return (
        <RenderIf condition={error === ''}>
            <View style={styles.container}>
                <FlatList
                    horizontal
                    data={movies}
                    renderItem={renderMovie}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </RenderIf>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default Movies;
