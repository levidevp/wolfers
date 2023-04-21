import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice';
import DataSlice from './DataSlice';
import CartSlice from './CartSlice';
import BuyerSlice from './BuyerSlice';
const store = configureStore({
    reducer: { 
        DataSlice, 
        AuthSlice,
        CartSlice,
        BuyerSlice,
    }
});


export default store;