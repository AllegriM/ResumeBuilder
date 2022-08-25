import { FormControl, FormLabel, Heading, Img, Input, Stack } from "@chakra-ui/react"
import { useEffect, useReducer, useState } from "react";
import { MdCameraAlt } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { createProfileResumeData } from "../../features/resumeData/resumeDataSlice";
import { IconContext } from "react-icons";
import ActionButtons from "../UI Components/ActionButtons";

function CreateDataProfile({ handleClose }) {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Profile)

    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)

    const [data, setData] = useReducer(
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
    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setData({ [name]: value })
    }

    const handleSubmit = () => {
        dispatch(createProfileResumeData(data))
        console.log(selector)
        handleClose()
    }

    const handleImage = (e) => {
        // console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = (e) => {
                setPreview({ image: e.target.result })
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image])

    console.log(preview)

    return (
        <Stack p={5} maxW={620} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center' bg='white'>
            <Heading>Edit Profile</Heading>
            <IconContext.Provider value={{ color:'gray', size:'5em'}}>
                <FormControl display='flex' minW='200px' w='100%' justifyContent='center' alignItems='center'>
                    <Input onChange={handleImage} w='100%' h='100%' type='file' id="input-file-upload" display='none' accept="image/png, image/jpg, image/gif, image/jpeg" />
                    {
                        preview ?
                            <FormLabel display='flex' justifyContent='center' alignItems='center' borderRadius='50%' w='200px' minH='200px' cursor='pointer' overflow='hidden'>
                                <Img h='200px' w='100%' objectFit='cover' src={preview.image} />
                            </FormLabel>
                            :
                            <FormLabel htmlFor="input-file-upload" bg='gray.200' borderRadius='50%' w='200px' display='flex' justifyContent='center' alignItems='center' minH='200px' cursor='pointer'>
                                <MdCameraAlt  />
                            </FormLabel>
                    }
                </FormControl>
            </IconContext.Provider>
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
                <ActionButtons handleClose={handleClose} handleSubmit={handleSubmit} />
            </FormControl >
        </Stack >
    )
}

export default CreateDataProfile