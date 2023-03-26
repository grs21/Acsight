import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    updateModalState: false,
    addModalState: false,
    showUserDetailState: false,
    optionModalState: false,
    selectedUser: "",
  },
  reducers: {
    changeAddModalSatate: (state, action) => {
      state.addModalState = action.payload
    },
    changeUserDetailModalSatate: (state, action) => {
      state.showUserDetailState = action.payload

    },
    changeUpdateModalState: (state, action) => {
      state.updateModalState = action.payload
    },
    setSelectedUSer: (state, action) => {
      state.selectedUser = action.payload
    },
    changeOptionModalState: (state, action) => {
      state.optionModalState = action.payload
    },
  }
})
export const { changeAddModalSatate, changeUserDetailModalSatate, setSelectedUSer, changeUpdateModalState, changeOptionModalState } = userListSlice.actions

export default userListSlice.reducer