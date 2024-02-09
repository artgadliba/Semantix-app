import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const searchQuerySlice = createSlice({
    name: 'balance',
    initialState: {
      value: ""
    },
    reducers: {
      setQuery: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      }
    }
})

export const { setQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;