import { createSlice } from '@reduxjs/toolkit'

const initialState = { pages: [] }

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    addPage(state, action) {
      state.pages.push(action.payload)
    }
  },
})

export const { addPage, getPage } = pagesSlice.actions
export default pagesSlice.reducer
