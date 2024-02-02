import { createSlice } from '@reduxjs/toolkit';

const openRegModalSlice = createSlice({
    name: 'openRegModal',
    initialState: {
      value: null
    },
    reducers: {
      setRegModalSlice: (state, action) => {
        state.value = action.payload;
      }
    }
})

export const { setRegModalSlice } = openRegModalSlice.actions;

export default openRegModalSlice.reducer;