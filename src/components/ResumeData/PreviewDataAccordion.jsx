import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stack, Text } from '@chakra-ui/react'

function PreviewDataAccordion({ title = "Info personal" }) {


    return (
        <Accordion allowToggle w='100%'>
            <AccordionItem>
                <h2>
                    <AccordionButton bg='white' borderRadius={5}>
                        <Text>{title}</Text>
                        <Stack flex='1' textAlign='left'>
                            Section 1 title
                        </Stack>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default PreviewDataAccordion