import { createSlice } from '@reduxjs/toolkit';

const updateFolderListSlice = createSlice({
    name: 'updateFolderList',
    initialState: {
      value: false
    },
    reducers: {
      setUpdateFolderList: (state, action) => {
        state.value = action.payload;
      }
    }
})

export const { setUpdateFolderList } = updateFolderListSlice.actions;

export default updateFolderListSlice.reducer;