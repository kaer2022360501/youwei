import {createStore,combineReducers,applyMiddleware} from "redux";
import user from "./reducer/user"
import star from "./reducer/star"
import reduxThunk from "redux-thunk"
import home from './reducer/home'
const reducers = combineReducers({
    star,
    user,
    home
})

const store = createStore(reducers,applyMiddleware(reduxThunk));

export default store;