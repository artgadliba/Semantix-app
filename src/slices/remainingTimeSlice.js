import { createSlice } from '@reduxjs/toolkit';

const remainingTimeSlice = createSlice({
    name: 'remainingTime',
    initialState: {
      value: null
    },
    reducers: {
      setRemainingTime: (state, action) => {
        state.value = action.payload;
      }
    }
})

export const { setRemainingTime } = remainingTimeSlice.actions;

export default remainingTimeSlice.reducer;