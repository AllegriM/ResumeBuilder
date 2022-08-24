import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import { FaPlus } from 'react-icons/fa'
import { IconContext } from "react-icons"
function ResumeMissingData({ display = "", title = 'Education' }) {

    return (
        <Box id={title.toLocaleLowerCase()} display={display} w='100%' zIndex='1'>
            <IconContext.Provider value={{ size: '1.65em' }}>
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
                    <Button borderRadius="9999px" p='1.25rem 2.25rem' bg='rgba(32 14 50)' variant='unstyled' display='flex' px={20}><FaPlus color="white" size='1.25em' /></Button>
                </Stack>
            </IconContext.Provider>
        </Box >
    )
}

export default ResumeMissingData