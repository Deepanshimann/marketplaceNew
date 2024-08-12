import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './Auth/Reducer';
import customerProductReducer from './CustomerProduct/Reducer'
import cartReducer from './Cart/Reducer';
import { orderReducer } from './Order/Reducer';
import Product from '../customer/component/products/Product';

const rootReducers = combineReducers({
  auth: authReducer,
  customersProduct:customerProductReducer,
  cart:cartReducer,
  order:orderReducer,

});

const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default store;
