import { Heading, Stack, Text } from "@chakra-ui/react"
import { IconContext } from "react-icons";
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineEmail, MdOutlineLocalPhone, MdOutlineLocationOn } from 'react-icons/md'
import { useSelector } from "react-redux"

function PreviewDataProfile({ setDisplay }) {

    const selector = useSelector(state => state.resumeData.Profile)


    const onEdit = () => {
        setDisplay("Profile")
    }


    return (
        <Stack
            onClick={onEdit}
            minH='330px'
            w='100%'
            bg='white'
            boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            maxW='620px'
            p={5}
            borderRadius={20}
            color='black'
            justify='space-around'
            cursor='pointer'
            >
            <IconContext.Provider value={{size: "1.5em" }}>
                <Stack p={4} borderRadius='50%' w='120px' h='120px' bg='gray.100' align='center' justify='center'>
                    <FaRegUser size='3em' />
                </Stack>
                <Heading mt={4} as='h4' size='md'>{selector?.fullName ? selector?.fullName : "Your name"}</Heading>
                <Stack direction='row' align='center'>
                    <MdOutlineEmail />
                    <Text>{selector?.email ? selector?.email : "Email"}</Text>
                </Stack>
                <Stack direction='row' align='center'>
                    <MdOutlineLocalPhone />
                    <Text>{selector?.phone ? selector?.phone : "Phone"}</Text>
                </Stack>
                <Stack direction='row' align='center'>
                    <MdOutlineLocationOn />
                    <Text>{selector?.city ? selector?.city : "Address"}</Text>
                </Stack>
            </IconContext.Provider>
        </Stack>
    )
}

export default PreviewDataProfile