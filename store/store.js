import { createStore, configureStore } from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { fetchUserEpic } from './epics/user'
import { userReducer } from './reducers/user'
//import pagesReducer from './slices/pagesSlice'

const epicMiddleware = createEpicMiddleware()

export const rootEpic = combineEpics(
  fetchUserEpic
)

export default function storeFactory() {
  const store = configureStore({
    reducer: {
      aaa: userReducer
    },
    middleware: [epicMiddleware]
  });

  epicMiddleware.run(rootEpic)

  return store
}
