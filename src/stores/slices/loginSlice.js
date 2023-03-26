import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userList: [],
    auth: true,

  },
  reducers: {
    setUsers: (state, action) => {
      state.userList = action.payload
    },
    setToken: (state, action) => {
      localStorage.setItem('auth', action.payload)
      state.auth = true;
    },
  }
})
export const { setUsers, setToken, setAuth } = loginSlice.actions

export default loginSlice.reducer