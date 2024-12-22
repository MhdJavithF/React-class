import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Reducers/counterReducer'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})