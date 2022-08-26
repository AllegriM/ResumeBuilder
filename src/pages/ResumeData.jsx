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

function ResumeData() 
{
    const [sectionId, setSectionId] = useState(null)
    const [dataToEdit, setDataToEdit] = useState({title : "", description : "", 
    image : "", city : "", 
    country : "", info : "", 
    startDate : "", endDate : ""})

    const handleOption = (id) => {
        setSectionId(id)
    }
    const handleClose = () => {
        setSectionId(null)
    }

    return (
        <Stack justify='center' align='center' gap={7} px={[6, 6, 0]} py={5} w='100%' overflowY='hidden'>
            {
                
                sectionId === "Profile" && 
                    (
                        <Suspense fallback={<Stack>Loading</Stack>}>
                            <CreateDataProfileElement data={dataToEdit} section={sectionId} handleClose={handleClose} /> 
                        </Suspense>
                    )
                ||
                sectionId === "Education" && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataEducationElement data={dataToEdit} section={sectionId} handleClose={handleClose} />
                    </Suspense>
                )                
                ||
                sectionId === "WorkExperience" && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataWorkExperienceElement data={dataToEdit} section={sectionId} handleClose={handleClose} />
                    </Suspense>
                )
                ||
                sectionId === "Skills" && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataSkillsElement data={dataToEdit} section={sectionId} handleClose={handleClose} />
                    </Suspense>
                )
                ||
                sectionId === "Language" && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataLanguageElement data={dataToEdit} section={sectionId} handleClose={handleClose} />
                    </Suspense>
                )
                ||
                sectionId === "Course" && 
                (   
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataCoursesElement data={dataToEdit} section={sectionId} handleClose={handleClose} />
                    </Suspense>
                )
                ||
                sectionId === 'Projects' && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataProjectElement data={dataToEdit} section={sectionId} handleClose={handleClose} />
                    </Suspense>
                )
                ||  
                sectionId === 'Certificates' && 
                (
                    <Suspense fallback={<Stack>Loading</Stack>}>
                        <CreateDataCertificatesElement data={dataToEdit} section={sectionId} handleClose={handleClose} />
                    </Suspense>
                )
            }
            {
                !sectionId && (
                <>
                    <FullResumeData  handleOption={handleOption} setDataToEdit={setDataToEdit} setSectionId={setSectionId} />
                    <ResumeDataButton handleOption={handleOption} setDataToEdit={setDataToEdit} />
                </>
                )
            }
            
        </Stack>
    )
}

export default ResumeData