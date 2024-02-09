import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
    name: 'progress',
    initialState: {
      value: 0
    },
    reducers: {
      setProgress: (state, action: PayloadAction<number>) => {
        state.value = action.payload;
      }
    }
})

export const { setProgress } = progressSlice.actions;

export default progressSlice.reducer;