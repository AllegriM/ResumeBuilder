import { Heading, Stack, Text } from "@chakra-ui/react"

function ResumeDataModalOptionCard({ icon, title = '', description = '', id, handleOption, onClose }) {

    const handleCreateOption = (id) => {
        console.log(id)
        handleOption(id)
        onClose()
        window.scrollTo(0,0)
    }

    return (
        <Stack
            onClick={() => handleCreateOption(id)}
            p={2}
            boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
            minH='80px'
            maxH='100px'
            h='100%'
            maxW='300px'
            cursor='pointer'
            _hover={{ transform: 'scale(1.05)' }}
            transition='all .2s ease-in-out'
            borderRadius={8}
        >
            <Stack
                direction='row'
                align='center'
                color='rgb(32, 14, 50)'
            >
                {icon}
                <Heading p={0} as='h5' size='sm'>{title}</Heading>
            </Stack>
            <Text fontSize={14}>{description}</Text>
        </Stack >
    )
}

export default ResumeDataModalOptionCard