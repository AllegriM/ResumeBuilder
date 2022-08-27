import { Stack, Image, Heading } from "@chakra-ui/react"
// import { useRef } from "react";
// import ReactToPrint from 'react-to-print';
import { useSelector } from "react-redux";


function PDFPreview() {

    const selector = useSelector(state => state.resumeData)

    // const componentRef = useRef();

    console.log(selector.Profile)
    return (
    <Stack w='100%' display={['none', 'none', 'none', 'block']} py={[0,0, 10]} >
        <Stack w='100%' align='center' justify='flex-start' bg='white' h='100%'>
            <Image src={selector.Profile.image} alt='profile' width='100%' />
            <Heading fontSize='3xl' fontWeight='800'>{selector.Profile.fullName}</Heading>
            <Heading fontSize='2xl' fontWeight='500'>{selector.Profile.jobTitle}</Heading>
            <Stack direction='row'>
                <Heading fontSize='xs' fontWeight='500'>{selector.Profile.email}</Heading>
                <Heading fontSize='xs' fontWeight='500'>{selector.Profile.phone}</Heading>
                <Heading fontSize='xs' fontWeight='500'>{selector.Profile.city}</Heading>
            </Stack>
        </Stack>
    </Stack>
    )
}

export default PDFPreview