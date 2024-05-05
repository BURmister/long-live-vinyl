import { useGetQuery } from '@/app/_hooks/useAxios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('history/fetchData', async (url) => useGetQuery(url));

const initialState = {
   data: [],
   status: 'loading', // loading | success | error
};

export const historySlice = createSlice({
   name: 'history',
   initialState,
   reducers: {
      updateStatus: (state, action) => {
         state.status = action.payload;
      },
      filterData: (state, action) => {
         state.news = state.data.filter((item) => item._id !== action.payload);
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchData.pending, (state) => {
         state.status = 'loading';
         state.data = [];
      });
      builder.addCase(fetchData.fulfilled, (state, action) => {
         state.status = 'success';
         state.data = action.payload;
      });
      builder.addCase(fetchData.rejected, (state) => {
         state.status = 'error';
         state.data = [];
      });
   },
});

//Alternative to useSelector
export const getData = (state) => state.history.data;
export const getStatus = (state) => state.history.status;

export const { updateStatus } = historySlice.actions;
export const { filterData } = historySlice.actions;

export default historySlice.reducer;
