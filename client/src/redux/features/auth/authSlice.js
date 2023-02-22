import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../utils/axios.js';

const initialState = {
   admin: null,
   token: null,
   isLoading: false,
   status: null,
}

export const loginAdmin = createAsyncThunk(
   'auth/loginAdmin',
   async ({ adminname, password }) => {
      try {
         const { data } = await axios.post('/auth/login', {
            adminname,
            password,
         });
         if (data.token) {
               window.localStorage.setItem('token', data.token);
         }

         return data;
      } catch (error) {
         console.log(error);
      }
   },
);

export const getMe = createAsyncThunk('auth/loginAdmin', 
   async () => {
      try {
         const { data } = await axios.get('/auth/me');

         return data;
      } catch (error) {
         console.log(error)
      }
   }
);

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         state.admin = null;
         state.token = null;
         state.isLoading = false;
         state.status = null;
      },
   },
   extraReducers: {
      //Login admin
      [loginAdmin.pending]: (state) => {
         state.isLoading = true;
         state.status = null;
      },
      [loginAdmin.fulfilled]: (state, action) => {
         state.isLoading = false;
         state.status = action.payload.massage;
         state.admin = action.payload.admin;
         state.token = action.payload.token;
      },
      [loginAdmin.rejectWithValue]: (state, action) => {
         state.status = action.payload.message;
         state.isLoading = false;
      },
      //Get me
      [getMe.pending]: (state) => {
         state.isLoading = true;
         state.status = null;
      },
      [getMe.fulfilled]: (state, action) => {
         state.isLoading = false;
         state.status = null;
         state.admin = action.payload?.admin;
         state.token = action.payload?.token;
      },
      [getMe.rejectWithValue]: (state, action) => {
         state.status = action.payload.message;
         state.isLoading = false;
      },
   }
});

export const checkIsAuth = (state) => Boolean(state.auth.token);

export const { logout } = authSlice.actions;
export default authSlice.reducer;