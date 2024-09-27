import { applyMiddleware, combineReducers , createStore } from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools}  from 'redux-devtools-extension'
import { createBookReducers } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';

const middlewares = [thunk];

const reducer = combineReducers({
    bookCreated : createBookReducers,
    bookList : bookListReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export {store}