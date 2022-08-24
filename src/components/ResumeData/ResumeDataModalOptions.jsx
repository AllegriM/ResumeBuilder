import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import { IconContext } from "react-icons";
import { FaUserCircle, FaRegFolderOpen, FaBrain, FaCertificate } from 'react-icons/fa'
import { MdWorkOutline, MdSchool, MdLanguage, MdLibraryBooks } from 'react-icons/md'
import ResumeDataModalOptionCard from "./ResumeDataModalOptionsItems"

function ResumeDataModalCard({ onClose, isOpen, handleOption }) {

    return (
        <Modal onClose={onClose} size={['xl', 'xl', '4xl', '4xl']} isOpen={isOpen}> 
            <ModalOverlay />
            <ModalContent mx={5} py={4}>
                <ModalBody display='grid' gridTemplateColumns='repeat(auto-fit, minmax(250px, 1fr))' flexDirection='column' gap={5}>
                    <IconContext.Provider value={{ size: '1.25em'}}>
                        <ResumeDataModalOptionCard handleOption={handleOption} onClose={onClose} id="profile" title="Profile" icon={<FaUserCircle size='1.25em' />} description='Make a great first impression by presenting yourself in a few sentences.' />
                        <ResumeDataModalOptionCard handleOption={handleOption} onClose={onClose} id="professionalExperience" title="Professional Experience" icon={<MdWorkOutline size='1.25em' />} description='A place to highlight your professional experience - including internships.' />
                        <ResumeDataModalOptionCard handleOption={handleOption} onClose={onClose} id="education" title="Education" icon={<MdSchool size='1.25em' />} description='Show off your primary education, college degrees and exchange semesters.' />
                        <ResumeDataModalOptionCard handleOption={handleOption} onClose={onClose} id="skills" title="Skills" icon={<FaBrain size='1.25em' />} description='List your technical, managerial or soft skills in this section.' />
                        <ResumeDataModalOptionCard handleOption={handleOption} onClose={onClose} id="language" title="Language" icon={<MdLanguage size='1.25em' />} description='You speak more than one language? Make sure to list them here.' />
                        <ResumeDataModalOptionCard handleOption={handleOption} onClose={onClose} id="projects" title="Projects" icon={<FaRegFolderOpen size='1.25em' />} description='Worked on a particular challenging project in the past? Mention it here.' />
                        <ResumeDataModalOptionCard handleOption={handleOption} onClose={onClose} id="certificates" title="Certificates" icon={<FaCertificate size='1.25em' />} description='Drivers licenses and other industry-specific certificates you have belong here.' />
                        <ResumeDataModalOptionCard handleOption={handleOption} onClose={onClose} id="course" title="Course" icon={<MdLibraryBooks size='1.25em' />} description='Did you complete MOOCs or an evening course? Show them off in this section.' />
                    </IconContext.Provider>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ResumeDataModalCard