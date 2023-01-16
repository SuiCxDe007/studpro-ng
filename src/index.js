import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {AuthContextProvider} from "./components/store/auth-context";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./components/Utils/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

//TODO If required remove strict mode

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
    rootReducer, // your reducers
    compose(
        applyMiddleware(thunk)
    )
)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
