import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    "Profile": {},
    "Education": [],
    "WorkExperience": [],
    "Skill": [],
    "Languages": [],
    "Projects": [],
    "Courses": [],
    "Certificates": []
}



export const resumeDataSlice = createSlice({
    name: 'resumeData',
    initialState,
    reducers: {
        createProfileResumeData: (state, action) => {
            Object.assign(state.Profile, action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editProfileResumeData: (state) => {
            state.value -= 1
        },
        deleteProfileResumeData: (state, action) => {
            state.value += action.payload
        },
        createEducationResumeData: (state, action) => {
            state.Education.push(action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editEducationResumeData: (state) => {
            state.value -= 1
        },
        deleteEducationResumeData: (state, action) => {
            state.value += action.payload
        },
        createWorkExperienceResumeData: (state, action) => {
            state.WorkExperience.push(action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editWorkExperienceResumeData: (state) => {
            state.value -= 1
        },
        deleteWorkExperienceResumeData: (state, action) => {
            state.value += action.payload
        },
        createSkillResumeData: (state, action) => {
            state.Skill.push(action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editSkillResumeData: (state) => {
            state.value -= 1
        },
        deleteSkillResumeData: (state, action) => {
            state.value += action.payload
        },
        createProjectsResumeData: (state, action) => {
            state.Projects.push(action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editProjectsResumeData: (state) => {
            state.value -= 1
        },
        deleteProjectsResumeData: (state, action) => {
            state.value += action.payload
        },
        createLanguagesResumeData: (state, action) => {
            state.Languages.push(action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editLanguagesResumeData: (state) => {
            state.value -= 1
        },
        deleteLanguagesResumeData: (state, action) => {
            state.value += action.payload
        },
        createCoursesResumeData: (state, action) => {
            state.Courses.push(action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editCoursesResumeData: (state) => {
            state.value -= 1
        },
        deleteCoursesResumeData: (state, action) => {
            state.value += action.payload
        },
        createCertificatesResumeData: (state, action) => {
            state.Certificates.push(action.payload)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        editCertificatesResumeData: (state) => {
            state.value -= 1
        },
        deleteCertificatesResumeData: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { createProfileResumeData, createWorkExperienceResumeData,
    createSkillResumeData, createProjectsResumeData,
    createLanguagesResumeData, createCoursesResumeData,
    createCertificatesResumeData, createEducationResumeData } = resumeDataSlice.actions

export default resumeDataSlice.reducer