import { combineReducers } from 'redux';
import { productsReducer } from './productReducer';
import {CartReducer} from './CartReducer';

const reducers = combineReducers({
    allProducts : productsReducer,
    cartItems : CartReducer
})

export default reducers;