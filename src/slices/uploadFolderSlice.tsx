import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUploadFolderObj {
    id: number;
    name: string;
}

const uploadFolderSlice = createSlice({
    name: 'uploadFolder',
    initialState: {
      value: null
    },
    reducers: {
      setUploadFolder: (state, action: PayloadAction<IUploadFolderObj | null>) => {
        state.value = action.payload;
      }
    }
})

export const { setUploadFolder } = uploadFolderSlice.actions;

export default uploadFolderSlice.reducer;