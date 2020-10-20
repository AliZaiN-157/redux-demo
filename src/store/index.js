import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import gameReducer from './reducers/gameReducer'
import personReducer from './reducers/personReducer'
import userReducer from './reducers/userReducer'

const AllReducer = combineReducers({
    game: gameReducer,
    person: personReducer,
    users: userReducer,
})

const IntialStates = {
    game: { name: 'Squash' },
    person: { name: 'Ali' },
    users: []

}

const middleware = [thunk]

const store = createStore(AllReducer, IntialStates, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store

