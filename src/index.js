import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import 'todomvc-app-css/index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { store, history } from './store/store';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
