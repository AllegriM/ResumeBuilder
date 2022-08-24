import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stack, Heading } from '@chakra-ui/react'

function PreviewDataAccordion({ title }) {

    return (
        <Accordion allowToggle variant='unstyled' maxW={750} w='100%' >
            <AccordionItem w='100%'>
                <AccordionButton bg='white' p={5} borderRadius={10} width='100%'>
                    <Stack flex='1' textAlign='left'>
                        <Heading p={0} as='h4' size='md'>{title}</Heading>
                        Section 1 title
                    </Stack>
                    <AccordionIcon />
                </AccordionButton>
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