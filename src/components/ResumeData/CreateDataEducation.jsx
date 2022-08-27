import { FormControl, FormLabel, Heading, Input, Stack, Textarea } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { createSectionResumeData } from "../../features/resumeData/resumeDataSlice";
import { useSaveDataInfo } from "../../hooks/useSaveInfo";
import ActionButtons from "../UI Components/ActionButtons";

function CreateDataEducation({ handleClose, data, section }) {

    const EMPTY_DATA = Object.values(data).every(item => item === "")

    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Education)

    const {handleChangeName, handleSubmit, newData } = useSaveDataInfo({selector, dispatch, handleClose, createSectionResumeData, data, section})

    return (
        <Stack key='education' maxW={620} p={5} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center' bg='white'>
            <Heading>{EMPTY_DATA ? "Create" : "Edit"} Education</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="title">Degree</FormLabel>
                    <Input value={newData.title} onChange={(e) => handleChangeName(e)} isRequired variant='unstyled' bg='gray.200' p={2} type='text' name="title" id='title' placeholder='Enter degree / Field of Study' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="info">School</FormLabel>
                    <Input value={newData.info} onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="info" id='info' placeholder='Enter school' />
                </Stack>
                <Stack direction='row' align='center' m={4}>
                    <Stack>
                        <FormLabel mb={0} htmlFor="city">City</FormLabel>
                        <Input value={newData.city} onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="city" id='city' placeholder='Enter City' />
                    </Stack>
                    <Stack>
                        <FormLabel mb={0} htmlFor="country">Country</FormLabel>
                        <Input value={newData.country} onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="country" id='country' placeholder='Enter Country' />
                    </Stack>
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="startDate">Start Date</FormLabel>
                    <Input value={newData.startDate} onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type="month" name="startDate" id='startDate' placeholder='Month' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="endDate">End Date</FormLabel>
                    <Input value={newData.endDate} onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type="month" name="endDate" id='endDate' placeholder='Month' />
                </Stack>
                <Stack m={4}>
                    <Textarea value={newData.description} onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="description" id='description' placeholder='Add a description of your education entry' />
                </Stack>
                <ActionButtons emptyData={EMPTY_DATA} section={section} oldData={data} newData={newData} handleClose={handleClose} handleSubmit={handleSubmit} />
            </FormControl >
        </Stack >
    )
}

export default CreateDataEducation