import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios.js';

const initialState = {
   apartments: [],
   loading: false,
}

export const createApartment = createAsyncThunk(
   'apartment/createApartment',
   async ({ title, street, houseNumber, metro, houseType, price, floor, floorMax, apartmentArea, numberRooms, bathroom, sellerName, sellerType, commission, sellerPhone, description, img }) => {
      try {
         const { data } = await axios.post('/apartments', { title, street, houseNumber, metro, houseType, price, floor, floorMax, apartmentArea, numberRooms, bathroom, sellerName, sellerType, commission, sellerPhone, description, img });
         return data;
      } catch (error) {
         console.log(error);
      }
   }
);

export const getAllApartments = createAsyncThunk(
   'apartment/getAllApartments',
   async () => {
      try {
         const { data } = await axios.get('/apartments');
         return data;
      } catch (error) {
         console.log(error);
      }
   }
);

export const removeApartment = createAsyncThunk(
   'apartment/removeApartment',
   async (id) => {
      try {
         const { data } = await axios.delete(`/apartments/${id}`, id);
         return data;
      } catch (error) {
         console.log(error);
      }
   }
);

export const apartmentSlice = createSlice({
   name: 'apartment',
   initialState,
   reducers: {},
   extraReducers: {
      //Create apartment
      [createApartment.pending]: (state) => {
         state.loading = true;
      },
      [createApartment.fulfilled]: (state, action) => {
         state.loading = false;
         state.apartments.push(action.payload);
      },
      [createApartment.rejected]: (state) => {
         state.loading = false;
      },
      //Get all apartments
      [getAllApartments.pending]: (state) => {
         state.loading = true;
      },
      [getAllApartments.fulfilled]: (state, action) => {
         state.loading = false;
         state.apartments = action.payload.apartments;
      },
      [getAllApartments.rejected]: (state) => {
         state.loading = false;
      },
      //Removal of the apartment
      [removeApartment.pending]: (state) => {
         state.loading = true;
      },
      [removeApartment.fulfilled]: (state, action) => {
         state.loading = false;
         //метод filter поверне новий масив без того елементу(action.payload._id) котрий потрібно видалити(шукаю всі квартири у яких id неспівпадає з (action.payload._id)
         state.apartments = state.apartments.filter(
            (apartment) => apartment._id !== action.payload._id,
         );
      },
      [removeApartment.rejected]: (state) => {
         state.loading = false;
      },
   },
});

export default apartmentSlice.reducer;