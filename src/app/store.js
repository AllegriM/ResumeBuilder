import { configureStore } from '@reduxjs/toolkit'
import resumeDataReducer from '../features/resumeData/resumeDataSlice'

export const store = configureStore({
    reducer: {
        resumeData: resumeDataReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})