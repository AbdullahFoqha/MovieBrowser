import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, Text, View} from "react-native";
import Movie from "../api/models/movie";
import * as Animatable from "react-native-animatable";
import MovieCard from "./movieCard";

interface Props {
    section: string,
    movies: Array<Movie> | undefined
}

const MovieSection: React.FC<Props> = ({movies, section}) => {
    const renderMovie = ({item: movie, index}: ListRenderItemInfo<Movie>) => (
        <Animatable.View
            animation={"bounceInRight"}
            duration={400 + (index * 200)}
        >
            <MovieCard movie={movie} onPress={() => null}/>
        </Animatable.View>
    )

    return (
        <View style={styles.container}>
            <Animatable.Text
                animation={'slideInDown'}
                duration={400}
                style={styles.sectionTitle}>
                {section}
            </Animatable.Text>

            <FlatList
                horizontal
                data={movies}
                renderItem={renderMovie}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
    },
    sectionTitle: {
        fontWeight: '700',
        fontSize: 20,
        color: '#abacb2',
        marginLeft: 10 + 2,
        marginBottom: 10
    }
})

export default MovieSection;
