import { configureStore } from '@reduxjs/toolkit'
import pagesReducer from './slices/pagesSlice'

export default configureStore({
  reducer: pagesReducer
})
