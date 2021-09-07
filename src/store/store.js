import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialData from '../initialData';

const data = {
    tasks: initialData
};

// exportation de la fonction configureStore | configuration et initialisation du store avec un état initiale
export default function configureStore(initialState = data) {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // pour voir les states directement dans le navigateur
    );
};