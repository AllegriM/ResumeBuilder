import { FormControl, FormLabel, Heading, Input, Select, Stack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { createSectionResumeData } from "../../features/resumeData/resumeDataSlice";
import { useSaveDataInfo } from "../../hooks/useSaveInfo";
import ActionButtons from "../UI Components/ActionButtons";

function CreateDataSkills({ handleClose, data, section }) {

    const EMPTY_DATA = Object.values(data).every(item => item === "")
    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Skills)
    console.log(selector)
    const { handleSubmit, handleChangeName, newData } = useSaveDataInfo({ selector, dispatch, handleClose, createSectionResumeData, data, section })

    return (
        <Stack p={5} maxW={620} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center' bg='white'>
            <Heading>{EMPTY_DATA ? "Create" : "Edit"} Skills</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="title">Skill</FormLabel>
                    <Input value={newData.title} onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="title" id='title' placeholder='Enter Skill' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="info">Information / Sub-skills</FormLabel>
                    <Input value={newData.info} onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="info" id='info' placeholder='Enter informacion or sub-skills' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="subinfo">Select skill level</FormLabel>
                    <Select value={newData.subinfo} onChange={(e) => handleChangeName(e)} size='md' variant='filled' bg='gray.200' name="subinfo" id='subinfo' >
                        <option value='Novice'>Novice</option>
                        <option value='Beginner'>Beginner</option>
                        <option value='Skillful'>Skillful</option>
                        <option value='Experienced'>Experienced</option>
                        <option value='Expert'>Expert</option>
                    </Select>
                </Stack>
                <ActionButtons emptyData={EMPTY_DATA} section={section} oldData={data} newData={newData} handleClose={handleClose} handleSubmit={handleSubmit} />
            </FormControl >
        </Stack >
    )
}

export default CreateDataSkills