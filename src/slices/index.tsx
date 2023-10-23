import { configureStore } from '@reduxjs/toolkit';
import usernameSlice from './usernameSlice';
import messageBubbleSlice from './messageBubbleSlice';
import balanceSlice from './balanceSlice';
import rateSlice from './rateSlice';
import progressSlice from './progressSlice';
import remainingTimeSlice from './remainingTimeSlice';
import updateFolderListSlice from './updateFolderListSlice';

export const store = configureStore({
    reducer: {
        username: usernameSlice,
        messageBubble: messageBubbleSlice,
        balance: balanceSlice,
        rate: rateSlice,
        progress: progressSlice,
        remainingTime: remainingTimeSlice,
        updateFolderList: updateFolderListSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;