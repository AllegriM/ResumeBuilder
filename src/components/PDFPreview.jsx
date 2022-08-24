import { Stack } from "@chakra-ui/react"

function PDFPreview() {
    return (
    <Stack w='100%' display={['none', 'none', 'none', 'block']} py={[0,0, 10]} >
        <Stack bg='white' h='100%'>PDFPreview</Stack>
    </Stack>
    )
}

export default PDFPreview