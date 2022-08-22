import { Stack } from "@chakra-ui/react"
import ResumeMissingData from "./ResumeMissingData"

function ResumeMissingDataGroup() {
    return (
        <Stack>
            <ResumeMissingData display="" title='Education' />
            <ResumeMissingData display="" title='Professional Experience' />
            <ResumeMissingData display="" title='Skill' />
        </Stack>
    )
}

export default ResumeMissingDataGroup