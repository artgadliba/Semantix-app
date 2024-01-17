import { createSlice } from '@reduxjs/toolkit';

const sortByFieldSlice = createSlice({
    name: 'balance',
    initialState: {
      value: "name"
    },
    reducers: {
      setSortByField: (state, action) => {
        state.value = action.payload;
      }
    }
})

export const { setSortByField } = sortByFieldSlice.actions;

export default sortByFieldSlice.reducer;