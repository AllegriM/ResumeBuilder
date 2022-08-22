import { Stack, Heading, Button } from '@chakra-ui/react'
import { FaFileDownload, FaRegEdit } from 'react-icons/fa'

function DownloadResume() {
    return (
        <Button
            _hover={{ bg: 'rgba(32, 14, 50, 0.9)' }}
            _active={{ bg: 'rgba(32, 14, 50, 1)' }}
            variant='solid'
            bg='rgba(32 14 50)'
            borderRadius='50%'
            px={3}
        >
            <FaFileDownload color='white' />
        </Button>
    )
}
// export default DownloadResume

function ResumeTitle() {
    return (
        <Stack direction='row' align='center'>
            <Heading as='h3' size='lg' textAlign='center' flexGrow={1}>New Resume</Heading>
            <FaRegEdit />
        </Stack>
    )
}
// export default ResumeTitle

function NavBar() {
    return (
        <Stack px={5} direction='row' h='75px' bg='white' align='center' justify='space-around' gap={5} boxShadow='rgba(0, 0, 0, 0.15) 1.50px 1.50px 2.6px' >
            <ResumeTitle />
            <DownloadResume></DownloadResume>
        </Stack>
    )
}

export default NavBar