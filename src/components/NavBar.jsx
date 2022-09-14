import { Button, Modal, ModalContent, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import PDFPreview from "./PDFPreview";
import PaperIcon from "./Icons/PaperIcon";
import SearchIcon from './Icons/SearchIcon'
import DesignIcon from './Icons/DesignIcon'

function NavBar({ setEditView }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Stack
            pos={['fixed', 'fixed', 'relative']}
            bottom={['3em', '3em', '0']}
            right={[0, '.25em', '0']}
            borderRadius={20}
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
            <Button onClick={() => setEditView(false)} boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' bg='white' variant='unstyled' w='2.75rem' display='flex' borderRadius='50%' px={0}>
                <PaperIcon />
                {/* <MdOutlineInsertDriveFile /> */}
            </Button>
            <Button onClick={() => setEditView(true)} boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' bg='white' variant='unstyled' w='2.75rem' display='flex' borderRadius='50%' px={0}>
                <DesignIcon />
            </Button>
            <Button onClick={onOpen} variant='unstyled' display='flex' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' bg='rgba(32 14 50)' borderRadius='50%' h='3.5rem' w='3.5rem' p={0}>
                <SearchIcon />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={['xs', 'sm', 'md', 'lg', 'xl']} >
                <ModalOverlay />
                <ModalContent>
                    <PDFPreview />
                </ModalContent>
            </Modal>
        </Stack >
    )
}

export default NavBar