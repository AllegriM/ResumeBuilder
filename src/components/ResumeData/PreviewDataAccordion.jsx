import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stack, Heading, Text, Button } from '@chakra-ui/react'
import PlusIcon from '../Icons/PlusIcon'

export const DATE_OPTIONS = {
    month: "short", //to display the full name of the month
    year: "numeric"
}


function PreviewDataAccordion({ title, data, setDataToEdit, setSectionId ,sectionId ,handleOption}) {

    console.log(sectionId)
    const handleEditAction = (item) => {
        setDataToEdit(item)
        setSectionId(title)
    }

    const handleCreateOption = () => {
        handleOption(sectionId)
        setDataToEdit({title: "", description: "", 
        image: "", city: "", 
        country: "", info: "", 
        startDate: "", endDate:""})
        // onClose()
        window.scrollTo(0,0)
    }

    return (
        <Accordion allowToggle variant='unstyled' w='100%' >
            <AccordionItem w='100%' border='none'>
                <AccordionButton bg='white' p={5} borderRadius={10} width='100%'>
                    <Stack flex='1' textAlign='left'>
                        <Heading p={0} as='h4' size='md'>{title}</Heading>
                    </Stack>
                    <AccordionIcon />
                </AccordionButton>
                {
                    data.length === 0 ? null :
                        data.map(item => {
                            const formatStartDate = new Date(item.startDate)
                            const formatEndDate = new Date(item.endDate)
                            console.log()
                            // const newStartDate = `${formatStartDate.getMonth()} ${formatStartDate.getYear()} `
                            // console.log(newStartDate)
                            return (
                                <AccordionPanel key={item.id} p='.5rem 1.5rem' bg='white' minH='48px' display='flex' flexDirection='column' align='center' mt={2} onClick={() => handleEditAction(item)} cursor='pointer'>
                                    <Stack direction='row' align='center'>
                                        <Text fontWeight={700}>{item.title && item.info ? `${item.title},` : null}</Text>
                                        <Text>{item.info ? item.info : null}</Text>
                                    </Stack>
                                    {
                                        item.startDate && item.endDate ?
                                            <Stack direction='row' align='center' gap={1}>
                                                <Text >{formatStartDate.toLocaleDateString("en-US", DATE_OPTIONS)} - {formatEndDate.toLocaleDateString("en-US", DATE_OPTIONS)}</Text>
                                            </Stack>
                                            : null
                                    }
                                </AccordionPanel>
                            )
                        })
                }
                <AccordionPanel bg='white' mt={2} h='4.5rem' p={0} borderBottomRadius='20px' border='none' display='flex' justifyContent='center' alignItems='center'>
                    <Button onClick={handleCreateOption} border='4px solid rgb(238 240 244/1)' p={5} borderRadius='9999px' variant='unstyled' display='flex' gap={3}>{title}<PlusIcon color='black' /> </Button>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default PreviewDataAccordion