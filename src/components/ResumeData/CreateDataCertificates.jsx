import { FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { createCertificatesResumeData } from '../../features/resumeData/resumeDataSlice'
import { useSaveDataInfo } from "../../hooks/useSaveInfo";
import ActionButtons from "../UI Components/ActionButtons";

function CreateDataCertificates({handleClose}) {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Certificates)
    
    const {handleSubmit, handleChangeName} = useSaveDataInfo({selector, dispatch, handleClose, saveData: createCertificatesResumeData})

    return (
        <Stack key='Language' p={5} maxW={620} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center' bg='white'>
            <Heading>Create Certificate</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="title">Certificate</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="title" id='title' placeholder='Enter language' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="info">Additional Information</FormLabel>
                    <Input onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="info" id='info' placeholder='e.g. level 1 and 2' />
                </Stack>
                <ActionButtons handleClose={handleClose} handleSubmit={handleSubmit} />
            </FormControl >
        </Stack >
    )
}

export default CreateDataCertificates