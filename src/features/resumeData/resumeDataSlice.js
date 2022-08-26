import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    "Profile": {},
    "Education": [],
    "WorkExperience": [],
    "Skills": [],
    "Language": [],
    "Projects": [],
    "Course": [],
    "Certificates": []
}



export const resumeDataSlice = createSlice({
    name: 'resumeData',
    initialState,
    reducers: {
        createProfileResumeData: (state, action) => {
            Object.assign(state.Profile, action.payload)
        },
        editProfileResumeData: (state) => {
            state.value -= 1
        },
        deleteProfileResumeData: (state, action) => {
            state.value += action.payload
        },
        createSectionResumeData: (state, action) => {
            const {section, data} = action.payload
            console.log(state[section])
            const seccion  = state[section]
            seccion.push(data)
        },
        editSectionResumeData: (state) => {
            state.value -= 1
        },
        deleteSectionResumeData: (state, action) => {
            const {section, data} = action.payload
            console.log(data)
            const seccion  = state[section]
            seccion.splice(seccion.findIndex((item) => item.id === data.id, 1))
            // seccion.slice(item => item.id === data.id, 1)
        },
    },
})

// Action creators are generated for each case reducer function
export const { createProfileResumeData, createSectionResumeData, deleteSectionResumeData } = resumeDataSlice.actions

export default resumeDataSlice.reducer