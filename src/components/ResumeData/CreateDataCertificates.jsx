import { FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { createSectionResumeData } from "../../features/resumeData/resumeDataSlice";
import { useSaveDataInfo } from "../../hooks/useSaveInfo";
import ActionButtons from "../UI Components/ActionButtons";

function CreateDataCertificates({handleClose, data, section}) {

    const EMPTY_DATA = Object.values(data).every(item => item === "")

    const dispatch = useDispatch()
    const selector = useSelector(state => state.resumeData.Certificates)
    
    const {handleSubmit, handleChangeName, newData} = useSaveDataInfo({selector, dispatch, handleClose, createSectionResumeData, data, section})

    return (
        <Stack key='Language' p={5} maxW={620} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' align='center' bg='white'>
            <Heading>{EMPTY_DATA ? "Create" : "Edit"} Certificate</Heading>
            <FormControl onSubmit={handleSubmit}>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="title">Certificate</FormLabel>
                    <Input value={newData.title} onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="title" id='title' placeholder='Enter language' />
                </Stack>
                <Stack m={4}>
                    <FormLabel mb={0} htmlFor="info">Additional Information</FormLabel>
                    <Input value={newData.info} onChange={(e) => handleChangeName(e)} required variant='unstyled' bg='gray.200' p={2} type='text' name="info" id='info' placeholder='e.g. level 1 and 2' />
                </Stack>
                <ActionButtons emptyData={EMPTY_DATA} section={section} oldData={data} newData={newData} handleClose={handleClose} handleSubmit={handleSubmit} />
            </FormControl >
        </Stack >
    )
}

export default CreateDataCertificates