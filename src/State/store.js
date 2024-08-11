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
  person:{
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
  }
});

const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default store;
