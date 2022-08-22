import { Heading, Stack, Text } from "@chakra-ui/react"
import { FaRegUser } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
function PreviewDataProfile({ setDisplay, isDisabled = true }) {

    const onEdit = () => {
        setDisplay(false)
    }

    return (
        <Stack
            onClick={onEdit}
            minH='330px'
            w='100%'
            bg='white'
            boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            maxW='680px'
            p={5}
            borderRadius={8}
            color={isDisabled ? 'rgb(156 163 175)' : 'black'}
            justify='space-around'
            cursor='pointer'
        >
            <Stack p={4} borderRadius='50%' w='80px' bg='gray.100' align='center'>
                <FaRegUser size='3em' />
            </Stack>
            <Heading mt={4} as='h4' size='md'>Your name</Heading>
            <Stack direction='row' align='center'>
                <HiOutlineMail size='1.5em' />
                <Text>Email</Text>
            </Stack>
            <Stack direction='row' align='center'>
                <HiOutlinePhone size='1.5em' />
                <Text>Phone</Text>
            </Stack>
            <Stack direction='row' align='center'>
                <HiOutlineMail size='1.5em' />
                <Text>Address</Text>
            </Stack>
        </Stack>
    )
}

export default PreviewDataProfile