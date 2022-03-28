import products from '../reducers/products';
import {configureStore} from '@reduxjs/toolkit';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {products},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})
// console.log(products)

export default store;
