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
            <Image source={{uri: movie.medium_cover_image}} resizeMode='cover'
                   style={{height: '100%', flex: 1, width: '100%', borderRadius: 12,}}/>
            <Text numberOfLines={1} style={styles.title}> {movie.title} </Text>
            <Text numberOfLines={1} style={styles.year}> {movie.year} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: Dimensions.get('screen').width / 3.7,
        marginHorizontal: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    title: {
        color: '#abacb2',
        fontSize: 15,
        fontWeight: '700',
        paddingVertical: 5
    },
    year: {
        color: '#abacb2',
        fontSize: 11,
        opacity: .8
    }

})

export default MovieCard;
