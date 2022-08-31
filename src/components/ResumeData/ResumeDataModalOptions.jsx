import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import ResumeDataModalOptionCard from "./ResumeDataModalOptionsItems"
import ProfileIcon from '../Icons/ProfileIcon'
import WorkIcon from '../Icons/WorkIcon'
import EducationIcon from '../Icons/EducationIcon'
import SkillsIcon from '../Icons/SkillsIcon'
import LanguageIcon from '../Icons/LanguageIcon'
import ProjectsIcon from '../Icons/ProjectsIcon'
import CertificatesIcon from '../Icons/CertificatesIcon'
import CourseIcon from '../Icons/CourseIcon'



function ResumeDataModalCard({ onClose, isOpen, handleOption, setDataToEdit }) {

    return (
        <Modal onClose={onClose} size={['xl', 'xl', '4xl', '4xl']} isOpen={isOpen}> 
            <ModalOverlay />
            <ModalContent mx={5} py={4}>
                <ModalBody display='grid' gridTemplateColumns='repeat(auto-fit, minmax(250px, 1fr))' flexDirection='column' gap={5}>
                        <ResumeDataModalOptionCard setDataToEdit={setDataToEdit} handleOption={handleOption} onClose={onClose} id="Profile" title="Profile" icon={<ProfileIcon size='1.25em' />} description='Make a great first impression by presenting yourself in a few sentences.' />
                        <ResumeDataModalOptionCard setDataToEdit={setDataToEdit} handleOption={handleOption} onClose={onClose} id="WorkExperience" title="Professional Experience" icon={<WorkIcon size='1.25em' />} description='A place to highlight your professional experience - including internships.' />
                        <ResumeDataModalOptionCard setDataToEdit={setDataToEdit} handleOption={handleOption} onClose={onClose} id="Education" title="Education" icon={<EducationIcon size='1.25em' />} description='Show off your primary education, college degrees and exchange semesters.' />
                        <ResumeDataModalOptionCard setDataToEdit={setDataToEdit} handleOption={handleOption} onClose={onClose} id="Skills" title="Skills" icon={<SkillsIcon size='1.25em' />} description='List your technical, managerial or soft skills in this section.' />
                        <ResumeDataModalOptionCard setDataToEdit={setDataToEdit} handleOption={handleOption} onClose={onClose} id="Language" title="Language" icon={<LanguageIcon size='1.25em' />} description='You speak more than one language? Make sure to list them here.' />
                        <ResumeDataModalOptionCard setDataToEdit={setDataToEdit} handleOption={handleOption} onClose={onClose} id="Projects" title="Projects" icon={<ProjectsIcon size='1.25em' />} description='Worked on a particular challenging project in the past? Mention it here.' />
                        <ResumeDataModalOptionCard setDataToEdit={setDataToEdit} handleOption={handleOption} onClose={onClose} id="Certificates" title="Certificates" icon={<CertificatesIcon size='1.25em' />} description='Drivers licenses and other industry-specific certificates you have belong here.' />
                        <ResumeDataModalOptionCard setDataToEdit={setDataToEdit} handleOption={handleOption} onClose={onClose} id="Course" title="Course" icon={<CourseIcon size='1.25em' />} description='Did you complete MOOCs or an evening course? Show them off in this section.' />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ResumeDataModalCard