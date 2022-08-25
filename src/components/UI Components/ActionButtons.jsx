import { Button, Stack } from "@chakra-ui/react"

function ActionButtons({handleClose, handleSubmit}) {
    return (
        <Stack direction='row' mt={7} justify='center'>
            <Button
                onClick={handleClose}
                display='flex'
                variant='unstyled'
                borderRadius='9999px'
                border='1px solid black'
                p='1rem 2rem'
            >
                Cancel
            </Button>
            <Button
                onClick={handleSubmit}
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
    )
}

export default ActionButtons