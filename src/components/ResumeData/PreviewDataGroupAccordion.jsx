import { Stack } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import PreviewDataAccordion from "./PreviewDataAccordion"

function PreviewDataGroupAccordion({setDataToEdit, setSectionId, handleOption}) {

    const selector = useSelector(state => state.resumeData)

    return (
        <Stack w='100%' gap={3}>
            {
                Object.entries(selector).map((item, index) => {
                    console.log(item)
                    return (
                        item[1].length === 0 || item[0] === "Profile" ? null :
                            <PreviewDataAccordion sectionId={item[0]} setSectionId={setSectionId} handleOption={handleOption} setDataToEdit={setDataToEdit} key={index} title={item[0]} data={item[1]} />
                    )
                })
            }
        </Stack>
        // <PreviewDataAccordion />
    )
}

export default PreviewDataGroupAccordion