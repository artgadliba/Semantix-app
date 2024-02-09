import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const sortByFieldSlice = createSlice({
    name: 'sortByField',
    initialState: {
      value: "name"
    },
    reducers: {
      setSortByField: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      }
    }
})

export const { setSortByField } = sortByFieldSlice.actions;

export default sortByFieldSlice.reducer;