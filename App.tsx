import {StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {store} from './src/store/store';
import Movies from "./src/screens/movies";

export default function App() {

    return (
        <Provider store={store}>
            <Movies/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
