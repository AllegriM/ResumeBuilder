import { Heading, Img, Stack, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import EmailIcon from '../Icons/EmailIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import LocationIcon from '../Icons/LocationIcon'
import ProfileIcon from '../Icons/ProfileIcon'




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
            <Stack p={4} borderRadius='50%' w='120px' h='120px' bg='gray.100' align='center' justify='center' overflow='hidden'>
                {
                    selector?.image ?
                        <Img objectFit='cover' src={URL.createObjectURL(selector?.image)} w={120} h='120px' flexShrink={0} maxW='120px' />
                        :
                        <ProfileIcon size='4em' />
                }

            </Stack>
            <Heading mt={4} as='h4' size='md'>{selector?.fullName ? selector?.fullName : "Your name"}</Heading>
            <Stack direction='row' align='center'>
                <EmailIcon />
                <Text>{selector?.email ? selector?.email : "Email"}</Text>
            </Stack>
            <Stack direction='row' align='center'>
                <PhoneIcon />
                <Text>{selector?.phone ? selector?.phone : "Phone"}</Text>
            </Stack>
            <Stack direction='row' align='center'>
                <LocationIcon />
                <Text>{selector?.city ? selector?.city : "Address"}</Text>
            </Stack>
        </Stack>
    )
}

export default PreviewDataProfile