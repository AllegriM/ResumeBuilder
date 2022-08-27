import { Button, Stack } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { deleteSectionResumeData, updateSectionResumeData } from "../../features/resumeData/resumeDataSlice"

function ActionButtons({handleClose, handleSubmit, emptyData, oldData, section, newData}) {

    const dispatch = useDispatch()

    const deleteData = () => {
        dispatch(deleteSectionResumeData({section, oldData}))
        handleClose()
    }

    const updateData = () => {
        dispatch(updateSectionResumeData({section, oldData, newData}))
        handleClose()
    }

    return (
        <Stack direction='row' mt={7} justify={emptyData ?  'flex-end' : 'space-between'}>
            {
                emptyData ? null :
                <Button onClick={deleteData} 
                display='flex'
                variant='unstyled'
                p={2}
                >
                    Remove
                </Button>
            }
            <Stack direction='row' gap={5}>
                <Button
                    onClick={handleClose}
                    variant='unstyled'
                >
                    Cancel
                </Button>
                <Button
                    onClick={emptyData ? handleSubmit : updateData}
                    fontWeight={600}
                    type="submit"
                    display='flex'
                    bg='linear-gradient(90deg, rgba(199,63,255,1) 0%, rgba(255,38,82,1) 100%)'
                    variant='unstyled'
                    borderRadius='9999px'
                    p='1rem 2rem'
                >
                    Save
                </Button>
            </Stack>
    </Stack>
    )
}

export default ActionButtons