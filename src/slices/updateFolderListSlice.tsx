import { createSlice } from '@reduxjs/toolkit';

const updateFolderListSlice = createSlice({
    name: 'updateFolderList',
    initialState: {
      value: false
    },
    reducers: {
      setUpdateFolderList: (state:{value: boolean}) => {
        state.value = !state.value;
      }
    }
})

export const { setUpdateFolderList } = updateFolderListSlice.actions;

export default updateFolderListSlice.reducer;