import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    "Profile": localStorage.getItem('Profile') ? JSON.parse(localStorage.getItem('Profile')) : {},
    "Education": localStorage.getItem('Education') ? JSON.parse(localStorage.getItem('Education')) : [],
    "WorkExperience": localStorage.getItem('WorkExperience') ? JSON.parse(localStorage.getItem('WorkExperience')) : [],
    "Skills": localStorage.getItem('Skills') ? JSON.parse(localStorage.getItem('Skills')) : [],
    "Language": localStorage.getItem('Language') ? JSON.parse(localStorage.getItem('Language')) : [],
    "Projects": localStorage.getItem('Projects') ? JSON.parse(localStorage.getItem('Projects')) : [],
    "Course": localStorage.getItem('Course') ? JSON.parse(localStorage.getItem('Course')) : [],
    "Certificates": localStorage.getItem('Certificates') ? JSON.parse(localStorage.getItem('Certificates')) : [],
}



export const resumeDataSlice = createSlice({
    name: 'resumeData',
    initialState,
    reducers: {
        createProfileResumeData: (state, action) => {
            Object.assign(state.Profile, action.payload)
        },
        createSectionResumeData: (state, action) => {
            const { section, data } = action.payload
            const seccion = state[section]
            seccion.push(data)
        },
        updateSectionResumeData: (state, action) => {
            const { section, newData, oldData } = action.payload
            const seccion = state[section]
            const dataIndex = seccion.findIndex(item => item.id === oldData.id)
            console.log({ oldData, newData, id: dataIndex })
            Object.assign(seccion[dataIndex], ({ ...newData, id: oldData.id }))
        },
        deleteSectionResumeData: (state, action) => {
            const { section, oldData } = action.payload
            const seccion = state[section]
            seccion.splice(seccion.findIndex((item) => item.id === oldData.id), 1);
        },
    },
})

// Action creators are generated for each case reducer function
export const { createProfileResumeData, createSectionResumeData, deleteSectionResumeData, updateSectionResumeData } = resumeDataSlice.actions

export default resumeDataSlice.reducer