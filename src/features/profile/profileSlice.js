import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        createProfileData: (state, action) => {
            Object.assign(state, action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editProfileData: (state) => {
            state.value -= 1
        },
        deleteProfileData: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { createProfileData, updateProfileData, deleteProfileData } = profileSlice.actions

export default profileSlice.reducer