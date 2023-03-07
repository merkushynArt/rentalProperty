import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios.js';
/*
const initialState = {
   apartments: [],
   loading: false,
}
*/
export const createApartment = createAsyncThunk(
   'apartment/createApartment',
   async ( params) => {
      try {
         const { data } = await axios.post('/apartments', params);
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

export const updateApartment = createAsyncThunk(
   'apartment/updateApartment',
   async (updatedApartment) => {
      try {
         const { data } = await axios.put(
               `/apartments/${updatedApartment.id}`,
               updatedApartment,
         )
         return data;
      } catch (error) {
         console.log(error);
      }
   },
);
/*
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
*/


export const apartmentSlice = createSlice({
   name: 'apartment',
   initialState: {
      loading: false,
      apartments: [],
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
      .addCase(createApartment.pending, (state) => {
         state.loading = true;
      })
      .addCase(createApartment.fulfilled, (state, action) => {
         state.loading = false;
         state.apartments.push(action.payload);
      })
      .addCase(createApartment.rejected, (state) => {
         state.loading = false;
      })
      .addCase(getAllApartments.pending, (state) => {
         state.loading = true;
      })
      .addCase(getAllApartments.fulfilled, (state, action) => {
         state.loading = false;
         state.apartments = action.payload.apartments;
      })
      .addCase(getAllApartments.rejected, (state) => {
         state.loading = false;
      })
      .addCase(removeApartment.pending, (state) => {
         state.loading = true;
      })
      .addCase(removeApartment.fulfilled, (state, action) => {
         state.loading = false;
         state.apartments = state.apartments.filter(
         (apartment) => apartment._id !== action.payload._id
         );
      })
      .addCase(removeApartment.rejected, (state) => {
         state.loading = false;
      })
      .addCase(updateApartment.pending, (state) => {
         state.loading = true;
      })
      .addCase(updateApartment.fulfilled, (state, action) => {
         state.loading = false;
         const index = state.posts.findIndex(
            (apartment) => apartment._id === action.payload._id
         )
         state.apartments[index] = action.payload;
      })
      .addCase(updateApartment.rejected, (state) => {
         state.loading = false;
      });
   },
});


export default apartmentSlice.reducer;