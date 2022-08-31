import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import PlusIcon from '../Icons/PlusIcon'


function ResumeMissingData({ display = "", title = 'Education' }) {

    return (
        <Box id={title.toLocaleLowerCase()} display={display} w='100%' zIndex='1'>
            <Stack
                style={{ borderStyle: "dashed" }}
                border='1px'
                align='center'
                justify='space-between'
                direction='row'
                borderRadius='20px'
                p='1rem 1.5rem'
            >
                <Heading p={0} as='h5' size='sm'>{title}</Heading>
                <Button borderRadius="9999px" p='1.25rem 2.25rem' bg='rgba(32 14 50)' variant='unstyled' display='flex' px={20}><PlusIcon /></Button>
            </Stack>
        </Box >
    )
}

export default ResumeMissingData