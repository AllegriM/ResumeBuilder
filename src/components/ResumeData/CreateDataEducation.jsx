import { FormControl, FormLabel, Heading, Input, Stack, Textarea } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { createEducationResumeData } from "../../features/resumeData/resumeDataSlice";
import { useSaveDataInfo } from "../../hooks/useSaveInfo";
import ActionButtons from "../UI Components/ActionButtons";

function CreateDataEducation({ handleClose }) {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Education)

    const {handleChangeName, handleSubmit } = useSaveDataInfo({selector, dispatch, handleClose, saveData: createEducationResumeData})

    return (
        <Stack key='education' maxW={620} p={5} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center' bg='white'>
            <Heading>Create Education</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="title">Degree</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="title" id='title' placeholder='Enter degree / Field of Study' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="info">School</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="info" id='info' placeholder='Enter school' />
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
                <ActionButtons handleClose={handleClose} handleSubmit={handleSubmit} />
            </FormControl >
        </Stack >
    )
}

export default CreateDataEducation