import { Button, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { IoSchoolSharp, FaUserCircle, GrLanguage, GrCertificate, FaRegFolderOpen, MdWorkOutline, ImBooks, GiBrain } from 'react-icons/all'

function ResumeDataModalOptionsItems({ icon, title = '', description = '' }) {

    return (
        <Stack
            p={['2', '5', '5', '5']}
            boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
            minH='80px'
            minW='300px'
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

// export default ResumeDataModalOptionsItems

function ResumeDataModalOptions({ onClose, isOpen }) {


    return (
        <Modal onClose={onClose} size={['xl', 'xl', '3xl', '4xl']} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent mx={5} py={4}>
                <ModalBody display='grid' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' flexDirection='column' gap={5}>
                    <ResumeDataModalOptionsItems title="Profile" icon={<FaUserCircle size='1.25em' />} description='Make a great first impression by presenting yourself in a few sentences.' />
                    <ResumeDataModalOptionsItems title="Professional Experience" icon={<MdWorkOutline size='1.25em' />} description='A place to highlight your professional experience - including internships.' />
                    <ResumeDataModalOptionsItems title="Education" icon={<IoSchoolSharp size='1.25em' />} description='Show off your primary education, college degrees and exchange semesters.' />
                    <ResumeDataModalOptionsItems title="Skills" icon={<GiBrain size='1.25em' />} description='List your technical, managerial or soft skills in this section.' />
                    <ResumeDataModalOptionsItems title="Language" icon={<GrLanguage size='1.25em' />} description='You speak more than one language? Make sure to list them here.' />
                    <ResumeDataModalOptionsItems title="Projects" icon={<FaRegFolderOpen size='1.25em' />} description='Worked on a particular challenging project in the past? Mention it here.' />
                    <ResumeDataModalOptionsItems title="Certificates" icon={<GrCertificate size='1.25em' />} description='Drivers licenses and other industry-specific certificates you have belong here.' />
                    <ResumeDataModalOptionsItems title="Course" icon={<ImBooks size='1.25em' />} description='Did you complete MOOCs or an evening course? Show them off in this section.' />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ResumeDataModalOptions