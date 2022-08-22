import { Button, useDisclosure } from "@chakra-ui/react"
import { FaPlus } from 'react-icons/fa'
import ResumeDataModalOptions from "./ResumeDataModalOptions"

function ResumeDataButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                onClick={onOpen}
                display='flex'
                bg='linear-gradient(90deg, rgba(199,63,255,1) 0%, rgba(255,38,82,1) 100%)'
                variant='unstyled'
                borderRadius='30%'
                minW='4rem'
                mt={5}>
                <FaPlus size='1.3em' color="white" />
            </Button>
            <ResumeDataModalOptions isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default ResumeDataButton