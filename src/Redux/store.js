import {configureStore} from '@reduxjs/toolkit'
import clientUserReducer from './clientSlices/clientUsers'
const store = configureStore({
    reducer:{
      clientUsers : clientUserReducer
    }
})

export default store