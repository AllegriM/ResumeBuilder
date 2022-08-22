import { Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import { useReducer } from "react";
import { IoCameraOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from "react-redux";
import { saveProfileData } from "../../features/profile/profileSlice";

function ChangeDataProfile({ setDisplay }) {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.profile)
    const [profileData, setProfileData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            fullName: "",
            jobTitle: "",
            email: "",
            phone: "",
            city: ""
        }
    );
    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setProfileData({ [name]: value })
    }

    const handleSubmit = () => {
        dispatch(saveProfileData(profileData))
        console.log(selector)
    }


    return (
        <Stack p={5} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center'>
            <Heading>Edit Profile</Heading>
            <FormControl display='flex' minW='200px' w='100%' justifyContent='center' alignItems='center'>
                <Input w='100%' h='100%' type='file' id="input-file-upload" display='none' accept="image/png, image/jpg, image/gif, image/jpeg" />
                <FormLabel htmlFor="input-file-upload" bg='gray.200' borderRadius='50%' w='200px' display='flex' justifyContent='center' alignItems='center' minH='200px' cursor='pointer'>
                    <IoCameraOutline color='gray' size='5em' />
                </FormLabel>
            </FormControl>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="name">Full name</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="fullName" id='name' placeholder='Enter your title, first and last name' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="jobTitle">Job Title</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="jobTitle" id='jobTitle' placeholder='Enter job title' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="email">Email</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='email' name="email" id='email' placeholder='Enter email' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="phone">Phone</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='phone' name="phone" id='phone' placeholder='Enter phone' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="city">City</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} variant='unstyled' bg='gray.200' p={2} type='phone' name="city" id='city' placeholder='Enter city, country' />
                </Stack>
                <Stack direction='row' mt={7} justify='center'>
                    <Button
                        onClick={() => setDisplay(true)}
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

export default ChangeDataProfile