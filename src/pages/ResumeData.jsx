import { Stack } from "@chakra-ui/react"
import { useState } from "react"
import ChangeDataProfile from "../components/ResumeData/ChangeDataProfile"
// import PreviewDataGroupAccordion from "../components/ResumeData/PreviewData/PreviewDataGroupAccordion"
// import PreviewDataAccordion from "../components/ResumeData/PreviewData/PreviewDataAccordion"
import PreviewDataProfile from "../components/ResumeData/PreviewDataProfile"
import ResumeDataButton from "../components/ResumeData/ResumeDataButton"
import ResumeMissingDataGroup from "../components/ResumeData/ResumeMissingDataGroup"


function ResumeData() {

    const [display, setDisplay] = useState(true)

    return (
        <Stack justify='center' align='center' gap={7} px={6} py={5}>
            {
                display ?
                    <>
                        <PreviewDataProfile setDisplay={setDisplay} />
                        {/* <PreviewDataGroupAccordion /> */}
                        <ResumeMissingDataGroup />
                        <ResumeDataButton />
                    </>
                    :
                    <ChangeDataProfile setDisplay={setDisplay} />
            }
        </Stack>
    )
}

export default ResumeData