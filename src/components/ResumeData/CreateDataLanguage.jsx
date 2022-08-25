import { FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { createLanguagesResumeData } from "../../features/resumeData/resumeDataSlice";
import { useSaveDataInfo } from "../../hooks/useSaveInfo";
import ActionButtons from "../UI Components/ActionButtons";

function CreateDataLanguage({ handleClose }) {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Language)

    const { handleSubmit, handleChangeName } = useSaveDataInfo({ selector, dispatch, handleClose, saveData: createLanguagesResumeData })

    return (
        <Stack key='Language' maxW={620} p={5} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center' bg='white'>
            <Heading>Create Languages</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="title">Language</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="title" id='title' placeholder='Enter language' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="info">Additional Information</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="info" id='info' placeholder='e.g. C2, 4+, TOEFL, IELTS,...' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="subinfo">Language Level</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="subinfo" id='subinfo' placeholder='Enter level' />
                </Stack>
                <ActionButtons handleClose={handleClose} handleSubmit={handleSubmit} />
            </FormControl >
        </Stack >
    )
}

export default CreateDataLanguage