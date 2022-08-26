import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stack, Heading, Text } from '@chakra-ui/react'

function PreviewDataAccordion({ title, data, setDataToEdit, setSectionId }) {

    const handleEditAction = (item) => {
        setDataToEdit(item)
        setSectionId(title)
    }

    return (
        <Accordion allowToggle variant='unstyled' w='100%' >
            <AccordionItem w='100%'>
                <AccordionButton bg='white' p={5} borderRadius={10} width='100%'>
                    <Stack flex='1' textAlign='left'>
                        <Heading p={0} as='h4' size='md'>{title}</Heading>
                    </Stack>
                    <AccordionIcon />
                </AccordionButton>
                {   
                    data.length === 0 ? null :
                    data.map(item => {

                        return (
                            <AccordionPanel key={item.id} p={2} bg='white' mt={2} onClick={() => handleEditAction(item)} cursor='pointer'>
                                <Stack direction='row' align='center'>
                                    <Text fontWeight={700}>{item.title}</Text>
                                    <Text>{item.info ? `, ${item.info}` : null}</Text>
                                </Stack>
                                {
                                    item.startDate && item.endDate ?
                                    <Stack direction='row' align='center' gap={1}>
                                        <Text >{item.startDate.replace('-', '/')} - {item.endDate.replace('-', '/')}</Text>
                                    </Stack>
                                    : null
                                }
                            </AccordionPanel>
                        )
                    })
                }

            </AccordionItem>
        </Accordion>
    )
}

export default PreviewDataAccordion