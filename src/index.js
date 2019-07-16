import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import * as serviceWorker from './serviceWorker';
import './index.css';
import { configureStore } from './module';
import App from './App';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
