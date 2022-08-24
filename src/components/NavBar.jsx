import { Button, Stack } from "@chakra-ui/react"
import { MdOutlineDesignServices, MdOutlineSearch, MdOutlineInsertDriveFile } from 'react-icons/md'
import { IconContext } from "react-icons";

function NavBar() {

    return (
        <Stack
                pos={['fixed', 'fixed', 'relative']}
                bottom={['3em', '3em', '0']}
                right={[0, '.25em', '0']}
                borderRadius={8}
                p={[0, 0, 8]}
                w='100%'
                maxW='100px'
                h='auto'
                maxH='300px'
                justify='space-between'
                align='center'
                zIndex='2'
                bg={['transparent', 'transparent', 'white']}
            >
            <IconContext.Provider value={{size: '1.65em'}}>
                <Button boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' w='2.75rem' borderRadius='50%' px={0}>
                    <MdOutlineInsertDriveFile />
                </Button>
                <Button boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' w='2.75rem' borderRadius='50%' px={0}>
                    <MdOutlineDesignServices />
                </Button>
                <Button variant='unstyled' display='flex' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' bg='rgba(32 14 50)' borderRadius='50%' h='3.5rem' w='3.5rem' p={0}>
                    <MdOutlineSearch size='2.25em' color="white" />
                </Button>
            </IconContext.Provider>
        </Stack >
    )
}

export default NavBar