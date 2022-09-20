import { FormControl, FormLabel, Heading, Img, Input, Stack, Button } from "@chakra-ui/react"
import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { createProfileResumeData, updateProfileImage } from "../../features/resumeData/resumeDataSlice";
import CameraIcon from '../Icons/CameraIcon'

function CreateDataProfile({ handleClose }) {

    const dispatch = useDispatch()

    const [preview, setPreview] = useState(null)
    const [image, setImage] = useState(null)

    const [newData, setData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            fullName: "",
            jobTitle: "",
            email: "",
            phone: "",
            city: "",
            image: ""
        }
    );

    const saveProfileImageLocalStorage = () => {
        localStorage.setItem('image', preview)
        // const reader = new FileReader();
        // reader.onloadend = () => {
        //     localStorage.setItem('image', reader.result)
        // }
        // reader.readAsDataURL(image.image);
    }

    const saveToLocalStorageArrayProfile = (section) => {
        const data = JSON.parse(localStorage.getItem(section)) || [];
        localStorage.setItem(section, JSON.stringify({ ...data, ...newData }));
    }

    const handleChangeName = (e) => {
        const { name, value } = e.target;
        // if type is file, convert to base64 and save to local storage
        if (name === "image") {
            // from file to canvas to save local storage
            const file = e.target.files[0];
            setImage({ [name]: file });
            setPreview(file)
        } else {
            setData({ [name]: value });
        }
    }

    const handleSubmit = () => {
        dispatch(createProfileResumeData(newData))
        dispatch(updateProfileImage(image))
        saveToLocalStorageArrayProfile("Profile")
        saveProfileImageLocalStorage("ProfileImage")
        handleClose()
    }

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = (e) => {
                setPreview(e.target.result)
            }
            reader.readAsDataURL(image.image)
        } else {
            setPreview(null)
        }
    }, [image])

    return (
        <Stack p={5} maxW={620} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center' bg='white'>
            <Heading>Edit Profile</Heading>
            <FormControl display='flex' minW='200px' w='100%' justifyContent='center' alignItems='center'>
                <Input onChange={(e) => handleChangeName(e)} w='100%' h='100%' type='file' name="image" id="image" display='none' accept="image/*" />
                {
                    preview ?
                        <FormLabel htmlFor="image" display='flex' justifyContent='center' alignItems='center' borderRadius='50%' w='200px' minH='200px' cursor='pointer' overflow='hidden'>
                            <Img h='200px' w='100%' objectFit='cover' src={preview} />
                        </FormLabel>
                        :
                        <FormLabel htmlFor="image" bg='gray.200' borderRadius='50%' w='200px' display='flex' justifyContent='center' alignItems='center' minH='200px' cursor='pointer'>
                            <CameraIcon />
                        </FormLabel>
                }
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
                <Stack direction='row' mt={7} justify='flex-end'>
                    <Stack direction='row' gap={5}>
                        <Button
                            onClick={handleClose}
                            variant='unstyled'
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            fontWeight={600}
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
                </Stack>
            </FormControl >
        </Stack >
    )
}

export default CreateDataProfile