import { createSlice } from '@reduxjs/toolkit';

const updateFileListSlice = createSlice({
    name: 'updateFileList',
    initialState: {
      value: false
    },
    reducers: {
      setUpdateFileList: (state: {value: boolean}) => {
        state.value = !state.value;
      }
    }
})

export const { setUpdateFileList } = updateFileListSlice.actions;

export default updateFileListSlice.reducer;