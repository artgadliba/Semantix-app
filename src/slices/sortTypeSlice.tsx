import { createSlice } from '@reduxjs/toolkit';

const sortTypeSlice = createSlice({
    name: 'balance',
    initialState: {
      value: "ascending"
    },
    reducers: {
      setSortType: (state, action) => {
        state.value = action.payload;
      }
    }
})

export const { setSortType } = sortTypeSlice.actions;

export default sortTypeSlice.reducer;