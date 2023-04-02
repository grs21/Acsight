import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("auth");
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userList: [],
    auth: token !== null && token !== "" ? true : false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.userList = action.payload
    },
    setToken: (state, action) => {
      localStorage.setItem('auth', action.payload)
      state.auth = action.payload !== "" ? true : false;
    },
  }
})
export const { setUsers, setToken, setAuth } = loginSlice.actions

export default loginSlice.reducer