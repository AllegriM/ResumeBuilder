import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        saveProfileData: (state, action) => {
            Object.assign(state, action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        updateProfileData: (state) => {
            state.value -= 1
        },
        deleteProfileData: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { saveProfileData, updateProfileData, deleteProfileData } = profileSlice.actions

export default profileSlice.reducer