import { Stack } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import PreviewDataAccordion from "./PreviewDataAccordion"

function PreviewDataGroupAccordion() {

    const selector = useSelector(state => state.resumeData)

    return (
        <Stack w='100%'>
            {
                Object.entries(selector).map((item, index) => {
                    return (
                        item[1].length === 0 || item[0] === "Profile" ? null :
                            <PreviewDataAccordion key={index} title={item[0]} data={item[1]} />
                    )
                })
            }
        </Stack>
        // <PreviewDataAccordion />
    )
}

export default PreviewDataGroupAccordion