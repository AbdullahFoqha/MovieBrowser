import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet} from "react-native";
import {getMovies} from '../api/moviesServies'
import Movie from "../api/models/movie";
import RenderIf from "../utility/renderIf";
import MovieSection from "../components/movieSection";
import {useDispatch, useStore} from "react-redux";
import {addPerson} from "../store/reducers/peopleReducer";
import AppView from "../components/common/appView";
import {toggleTheme} from "../store/reducers/configReducer";
import {shuffleMovies} from "../store/reducers/moviesReducer";

const Movies: React.FC = () => {
    const [drama, setDrama] = useState<Array<Movie>>();
    const [action, setAction] = useState<Array<Movie>>();
    const [horror, setHorror] = useState<Array<Movie>>();
    const [error, setError] = useState('');

    const dispatch = useDispatch()
    const store = useStore()

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
        // fetchTheData()

        const unsubscribe = store.subscribe(() => {
            console.log(store.getState())
        })

        dispatch(addPerson({name: 'ALI ALI'}))

        return () => {
            unsubscribe()
        }
    })


    return (
        // <RenderIf condition={error === ''}>
        //     <SafeAreaView style={styles.container}>
        //         <MovieSection movies={action} section={'Action'}/>
        //         <MovieSection movies={drama} section={'Drama'}/>
        //         <MovieSection movies={horror} section={'Horror'}/>
        //     </SafeAreaView>
        // </RenderIf>
        <Pressable style={styles.container} onPress={() => {
            dispatch(toggleTheme({id: 1}))
            // dispatch(addPerson({name: 'ALI ALI'}))
            // dispatch(shuffleMovies())
        }}>
            <AppView/>
        </Pressable>
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
