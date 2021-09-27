import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPages = createAsyncThunk('pages/getPages', async (wat, thunkAPI) => {
  const req = await axios.get(`/api/pages`)
  return req.data
})

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    pages: []
  },
  reducers: {
    addPage(state, action) {
      state.pages.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPages.fulfilled, (state, action) => {
      state.pages = action.payload
    })
  }
})

export const { addPage, getPage } = pagesSlice.actions
export default pagesSlice.reducer
