import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../features/profile/profileSlice'
import resumeDataReducer from '../features/resumeData/resumeDataSlice'

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        resumeData: resumeDataReducer
    },
})