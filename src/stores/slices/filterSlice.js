import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filtersList: {
      male: false,
      female: false,
      active: false,
      passive: false,
    }
  },
  reducers: {
    setFilter: (state, action) => {
      state.filtersList[action.payload.type] = action.payload.value
    },
  }
})
export const { setFilter } = filterSlice.actions

export default filterSlice.reducer