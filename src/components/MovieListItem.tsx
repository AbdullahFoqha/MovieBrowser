import React from 'react';
import {StyleSheet, View} from "react-native";
import Movie from "../api/models/movie";

interface Props {
    movie: Movie
}

const MovieListItem: React.FC<Props> = ({movie}) => {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default MovieListItem;
