import React from 'react';
import {createRoot} from 'react-dom/client';
// Routes
import {BrowserRouter as Router} from 'react-router-dom';
// Redux
import {Provider} from 'react-redux';
import { store } from './app/store';
// Component
import App from "./App";

const root=createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <Router>
        <App/>
    </Router>
    </Provider>
    );