import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import Movie from "../api/models/movie";

interface Props {
    movie: Movie,
    onPress: () => void
}

const MovieCard: React.FC<Props> = ({movie}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: movie.small_cover_image}} style={{height: 50, width: 50}}/>
            <Text style={styles.title}> {movie.title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: Dimensions.get('screen').width / 4,
        backgroundColor: '#000',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15
    },
    title: {color: '#fff'}
})

export default MovieCard;
