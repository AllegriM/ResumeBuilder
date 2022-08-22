import { Button, Stack } from "@chakra-ui/react"
import { IoDocumentTextOutline } from 'react-icons/io5'
import { MdOutlineDesignServices } from 'react-icons/md'
import { AiOutlineFileSearch } from 'react-icons/ai'

function NavBar() {
    return (
        <Stack
            pos={['fixed', 'fixed', 'relative', 'relative']}
            bottom={['3em', '3em']}
            right={['1.45em', '1.6em']}
            width='60px'
            h='175px'
            justify='space-between'
            align='center'
            zIndex='2'
        >
            <Button boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' w='2.75rem' borderRadius='50%' px={0}>
                <IoDocumentTextOutline size='1.65em' />
            </Button>
            <Button boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' w='2.75rem' borderRadius='50%' px={0}>
                <MdOutlineDesignServices size='1.65em' />
            </Button>
            <Button variant='unstyled' display='flex' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' bg='rgba(32 14 50)' borderRadius='50%' h='3.5rem' w='3.5rem' p={0}>
                <AiOutlineFileSearch size='2.25em' color="white" />
            </Button>
        </Stack >
    )
}

export default NavBar