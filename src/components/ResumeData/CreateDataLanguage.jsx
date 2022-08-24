import { Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import createLanguageResumeData from "../../features/resumeData/resumeDataSlice";

function CreateDataLanguage({ handleClose }) {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.Language)
    const [languageData, setLanguageData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            language: "",
            info: "",
            level: ""
        }
    );
    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setLanguageData({ [name]: value })
    }

    const handleSubmit = () => {
        dispatch(createLanguageResumeData(languageData))
        console.log(selector)
    }


    return (
        <Stack key='Language' maxW={620} p={5} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center'>
            <Heading>Create Languages</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="language">Language</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="language" id='language' placeholder='Enter language' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="info">Additional Information</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="info" id='info' placeholder='e.g. C2, 4+, TOEFL, IELTS,...' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="level">Language Level</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="level" id='level' placeholder='Enter level' />
                </Stack>
                <Stack direction='row' mt={7} justify='center'>
                    <Button
                        onClick={handleClose}
                        display='flex'
                        variant='unstyled'
                        borderRadius='9999px'
                        border='1px solid black'
                        p='1rem 2rem'
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        display='flex'
                        bg='linear-gradient(90deg, rgba(199,63,255,1) 0%, rgba(255,38,82,1) 100%)'
                        variant='unstyled'
                        borderRadius='9999px'
                        p='1rem 2rem'
                    >
                        Save
                    </Button>
                </Stack>

            </FormControl >
        </Stack >
    )
}

export default CreateDataLanguage