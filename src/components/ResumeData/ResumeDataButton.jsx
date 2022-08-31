import { Button, useDisclosure } from "@chakra-ui/react"
import ResumeDataModalOptions from "./ResumeDataModalOptions"
import PlusIcon from '../Icons/PlusIcon'

function ResumeDataButton({ handleOption, setDataToEdit }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                onClick={onOpen}
                display='flex'
                bg='linear-gradient(90deg, rgba(199,63,255,1) 0%, rgba(255,38,82,1) 100%)'
                variant='unstyled'
                borderRadius='9999px'
                minW='4rem'
                mt={5}>
                <PlusIcon />
            </Button>
            <ResumeDataModalOptions setDataToEdit={setDataToEdit} handleOption={handleOption} isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default ResumeDataButton