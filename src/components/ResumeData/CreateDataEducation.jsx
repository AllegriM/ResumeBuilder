import { Button, FormControl, FormLabel, Heading, Input, Stack, Textarea } from "@chakra-ui/react"
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEducationResumeData } from "../../features/resumeData/resumeDataSlice";

function CreateDataEducation({ handleClose }) {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Education)
    const [educationData, setEducationData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            school: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
            description: ""
        }
    );
    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setEducationData({ [name]: value })
    }

    const handleSubmit = () => {
        dispatch(createEducationResumeData(educationData))
        console.log(selector)
    }


    return (
        <Stack key='education' maxW={620} p={5} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center'>
            <Heading>Create Education</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="degree">Degree</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="degree" id='degree' placeholder='Enter degree / Field of Study' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="school">School</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="school" id='school' placeholder='Enter school' />
                </Stack>
                <Stack direction='row' align='center' m={4}>
                    <Stack>
                        <FormLabel mb={0} htmlFor="city">City</FormLabel>
                        <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="city" id='city' placeholder='Enter City' />
                    </Stack>
                    <Stack>
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
                    <Textarea onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="description" id='description' placeholder='Add a description of your education entry' />
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

export default CreateDataEducation