import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
      value: 0
    },
    reducers: {
      setBalance: (state, action: PayloadAction<number>) => {
        state.value = action.payload;
      }
    }
})

export const { setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;