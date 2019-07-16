import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export function configureStore(history) {

    const middleware = applyMiddleware(
        thunk,
        routerMiddleware(history)
    );

    const composed = window.__REDUX_DEVTOOLS_EXTENSION__ ?
        compose(
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ) :
        middleware;

    return createStore(
        combineReducers({
            router: connectRouter(history)
        }),
        composed
    )

}