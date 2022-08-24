import { Button, FormControl, FormLabel, Heading, Input, Stack, Textarea } from "@chakra-ui/react"
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import createProjectsResumeData from "../../features/resumeData/resumeDataSlice";

function CreateDataProject({ handleClose }) {
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
        dispatch(createProjectsResumeData(languageData))
        console.log(selector)
    }


    return (
        <Stack key='Language' maxW={620} p={5} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center'>
            <Heading>Create Project</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="project">Project title</FormLabel>
                    <Stack direction='row' align='center'>
                        <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="project" id='project' placeholder='Enter course' />
                        <Button bg='white' borderRadius={10}>Link</Button>
                    </Stack>
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="subtitle">Sub title</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="subtitle" id='subtitle' placeholder='Enter institution' />
                </Stack>
                <Stack m={4} direction='row' align='center'>
                    <Stack w='100%'>
                        <FormLabel mb={0} htmlFor="city">City</FormLabel>
                        <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="city" id='city' placeholder='Enter City' />
                    </Stack>
                    <Stack w='100%'>
                        <FormLabel mb={0} htmlFor="country">Country</FormLabel>
                        <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="country" id='country' placeholder='Enter Country' />
                    </Stack>
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="startDate">Start Date</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type="month" name="startDate" id='startDate' placeholder='Month' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="endDate">End Date</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type="month" name="endDate" id='endDate' placeholder='Month' />
                </Stack>
                <Stack m={4}>
                    <Textarea onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="description" id='description' placeholder='Describe the project...' />
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

export default CreateDataProject