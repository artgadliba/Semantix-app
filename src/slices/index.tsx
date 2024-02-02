import { configureStore } from '@reduxjs/toolkit';
import usernameSlice from './usernameSlice';
import messageBubbleSlice from './messageBubbleSlice';
import balanceSlice from './balanceSlice';
import rateSlice from './rateSlice';
import progressSlice from './progressSlice';
import remainingTimeSlice from './remainingTimeSlice';
import searchQuerySlice from './searchQuerySlice';
import sortTypeSlice from './sortTypeSlice';
import sortByFieldSlice from './sortByFieldSlice';
import updateFileListSlice from './updateFileListSlice';
import updateFolderListSlice from './updateFolderListSlice';
import uploadFolderSlice from './uploadFolderSlice';
import widgetFileSlice from './widgetFileSlice';

export const store = configureStore({
    reducer: {
        username: usernameSlice,
        messageBubble: messageBubbleSlice,
        balance: balanceSlice,
        rate: rateSlice,
        progress: progressSlice,
        remainingTime: remainingTimeSlice,
        searchQuery: searchQuerySlice,
        sortType: sortTypeSlice,
        sortByField: sortByFieldSlice,
        updateFileList: updateFileListSlice,
        updateFolderList: updateFolderListSlice, 
        uploadFolder: uploadFolderSlice,
        widgetFile: widgetFileSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;