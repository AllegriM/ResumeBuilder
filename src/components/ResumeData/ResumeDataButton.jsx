import { Button, useDisclosure } from "@chakra-ui/react"
import { FaPlus } from 'react-icons/fa'
import { IconContext } from "react-icons"
import ResumeDataModalOptions from "./ResumeDataModalOptions"

function ResumeDataButton({ handleOption, setDataToEdit }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconContext.Provider value={{ size: '1.65em' }}>
                <Button
                    onClick={onOpen}
                    display='flex'
                    bg='linear-gradient(90deg, rgba(199,63,255,1) 0%, rgba(255,38,82,1) 100%)'
                    variant='unstyled'
                    borderRadius='9999px'
                    minW='4rem'
                    mt={5}>
                    <FaPlus size='1.3em' color="white" />
                </Button>
                <ResumeDataModalOptions setDataToEdit={setDataToEdit} handleOption={handleOption} isOpen={isOpen} onClose={onClose} />
            </IconContext.Provider>
        </>
    )
}

export default ResumeDataButton