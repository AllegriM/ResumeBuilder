import { Stack, Text, Button } from '@chakra-ui/react'
import { FaFileDownload, FaRegEdit } from 'react-icons/fa'
import { IconContext } from "react-icons";

function DownloadResume() {
    return (
        <IconContext.Provider value={{ size: '1em' }}>
            <Button
                _hover={{ bg: 'rgba(32, 14, 50, 0.9)' }}
                _active={{ bg: 'rgba(32, 14, 50, 1)' }}
                variant='solid'
                bg='rgba(32 14 50)'
                borderRadius='50%'
                h={10}
                px={0}
            >
                <FaFileDownload color='white' />
            </Button>
        </IconContext.Provider>
    )
}
// export default DownloadResume

function ResumeTitle() {
    return (
        <IconContext.Provider value={{ size: '1em' }}>
            <Stack direction='row' align='center'>
                <Text fontSize={['1.25rem', '1rem', '1.5rem', '2rem']} fontWeight={700} textAlign='center' flexGrow={1}>New Resume</Text>
                <FaRegEdit size='1.5em'/>
            </Stack>
        </IconContext.Provider>
    )
}
// export default ResumeTitle

function NavBar() {
    return (
        <Stack pos={['sticky', 'sticky', 'relative']} borderRadius={[0, 0, 20]} top={0} px={5} maxW='620px' w='100%' direction='row' py={3} bg='white' align='center' justify='space-around' gap={5} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' >
            <ResumeTitle />
            <DownloadResume></DownloadResume>
        </Stack>
    )
}

export default NavBar