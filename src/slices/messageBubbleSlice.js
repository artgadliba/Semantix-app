import { createSlice } from '@reduxjs/toolkit';

const messageBubbleSlice = createSlice({
    name: 'messageBubble',
    initialState: {
      value: false
    },
    reducers: {
      setMessageBubbleState: (state, action) => {
        state.value = action.payload;
      }
    }
})

export const { setMessageBubbleState } = messageBubbleSlice.actions;

export default messageBubbleSlice.reducer;
