import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const widgetFileStateSlice = createSlice({
    name: 'widgetFileState',
    initialState: {
      value: null
    },
    reducers: {
      setWidgetFileState: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      }
    }
})

export const { setWidgetFileState } = widgetFileStateSlice.actions;

export default widgetFileStateSlice.reducer;