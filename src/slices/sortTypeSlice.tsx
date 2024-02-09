import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const sortTypeSlice = createSlice({
    name: 'sortType',
    initialState: {
      value: "ascending"
    },
    reducers: {
      setSortType: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      }
    }
})

export const { setSortType } = sortTypeSlice.actions;

export default sortTypeSlice.reducer;