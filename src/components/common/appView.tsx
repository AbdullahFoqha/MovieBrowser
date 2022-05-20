import React, {useEffect} from 'react';
import {StyleSheet, View} from "react-native";
import {useAppSelector} from "../../store/store";
import {useDispatch, useStore} from "react-redux";

const AppView: React.FC = ({children}) => {
    const colors = useAppSelector((state) => state.config.colors)
    const store = useStore()

    useEffect(() => {
        const unsubscribe = store.subscribe(() => console.log(store.getState()))
        return () => unsubscribe()
    })

    return (
        <View style={[styles.container, {backgroundColor: colors.primary}]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100,
        height: 100
    }
})

export default AppView;
