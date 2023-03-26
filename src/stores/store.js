import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../stores/slices/loginSlice'
import homeReducer from '../stores/slices/modalSlice'
import filterSlice from './slices/filterSlice'

export default configureStore({
    reducer: {
        login: userReducer,
        home: homeReducer,
        filter: filterSlice
    },
})