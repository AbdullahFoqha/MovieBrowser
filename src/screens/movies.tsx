import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import {getMovies} from '../api/movies'
import {AxiosResponse} from "axios";
import Movie from "../api/models/movie";
import MoviesResponse from "../api/models/moviesResponse";

interface Props {

}

const Movies: React.FC<Props> = ({}) => {
    const [movies, setMovies] = useState<Array<Movie>>();
    useEffect(() => {
        getMovies().then((response: AxiosResponse<MoviesResponse>) => {
            let {data: {movies: tempMovies}, status } = response.data
            setMovies(tempMovies);
        })
    })

    return (
        <View style={styles.container}>
            <FlatList data={movies}
                      renderItem={({item}) => <View><Text style={{color: '#000'}}>{item.title}</Text></View>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default Movies;
