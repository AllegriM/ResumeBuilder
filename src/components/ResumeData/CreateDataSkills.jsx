import { Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProfileResumeData } from "../../features/resumeData/resumeDataSlice";

function CreateDataSkills({ handleClose }) {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Profile)

    const [profileData, setProfileData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            skills: "",
            subSkills: "",
            level: ""
        }
    );
    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setProfileData({ [name]: value })
    }

    const handleSubmit = () => {
        dispatch(createProfileResumeData(profileData))
        console.log(selector)
    }

    return (
        <Stack p={5} maxW={620} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center'>
            <Heading>Create Skills</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="skill">Skill</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="skill" id='skill' placeholder='Enter Skill' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="subSkills">Information / Sub-skills</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='text' name="subSkills" id='subSkills' placeholder='Enter informacion or sub-skills' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="level">Select skill level</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='select' name="level" id='level' placeholder='Skill level' />
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

export default CreateDataSkills