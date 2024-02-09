import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const rateSlice = createSlice({
    name: 'rate',
    initialState: {
      value: ""
    },
    reducers: {
      setRate: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      }
    }
})

export const { setRate } = rateSlice.actions;

export default rateSlice.reducer;