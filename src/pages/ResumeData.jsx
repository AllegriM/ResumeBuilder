import { Stack } from "@chakra-ui/react"
import React, { Suspense, useState } from "react"
import FullResumeData from "../components/ResumeData/FullResumeData"
import ResumeDataButton from "../components/ResumeData/ResumeDataButton"

const CreateDataEducationElement = React.lazy(() => import("../components/ResumeData/CreateDataEducation"));
const CreateDataProfileElement = React.lazy(() => import("../components/ResumeData/CreateDataProfile"));
const CreateDataWorkExperienceElement = React.lazy(() => import("../components/ResumeData/CreateDataWorkExperience"));  
const CreateDataSkillsElement = React.lazy(() => import("../components/ResumeData/CreateDataSkills"));
const CreateDataLanguageElement = React.lazy(() => import("../components/ResumeData/CreateDataLanguage"));
const CreateDataCoursesElement = React.lazy(() => import("../components/ResumeData/CreateDataCourses"));
const CreateDataProjectElement = React.lazy(() => import("../components/ResumeData/CreateDataProject"));
const CreateDataCertificatesElement = React.lazy(() => import("../components/ResumeData/CreateDataCertificates"));

function ResumeData() {

    const [sectionId, setSectionId] = useState(null)

    const handleOption = (id) => {
        setSectionId(id)
    }
    const handleClose = () => {
        setSectionId(null)
    }

    return (
        <Stack justify='center' align='center' gap={7} px={[6, 6, 0]} py={5} w='100%'>
            {
                
                sectionId === "profile" && 
                    (
                        <Suspense fallback={<Stack>Loading</Stack>}>
                            <CreateDataProfileElement handleClose={handleClose} /> 
                        </Suspense>
                    )
                ||
                sectionId === "education" && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataEducationElement handleClose={handleClose} />
                    </Suspense>
                )                
                ||
                sectionId === "professionalExperience" && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataWorkExperienceElement handleClose={handleClose} />
                    </Suspense>
                )
                ||
                sectionId === "skills" && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataSkillsElement handleClose={handleClose} />
                    </Suspense>
                )
                ||

                sectionId === "language" && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataLanguageElement handleClose={handleClose} />
                    </Suspense>
                )
                ||
                sectionId === "course" && 
                (   
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataCoursesElement handleClose={handleClose} />
                    </Suspense>
                )
                ||
                sectionId === 'projects' && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataProjectElement handleClose={handleClose} />
                    </Suspense>
                )
                ||  
                sectionId === 'certificates' && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataCertificatesElement handleClose={handleClose} />
                    </Suspense>
                )
            }
            {
                !sectionId && (
                <>
                    <FullResumeData  handleOption={handleOption}/>
                    <ResumeDataButton handleOption={handleOption} />
                </>
                )
            }
            
        </Stack>
    )
}

export default ResumeData