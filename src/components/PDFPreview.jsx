import { Stack, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { DATE_OPTIONS } from "./ResumeData/PreviewDataAccordion";
import EmailIcon from './Icons/EmailIcon'
import PhoneIcon from './Icons/PhoneIcon'


function PDFPreview({ componentRef }) {

    const selector = useSelector(state => state.resumeData)

    return (
        <Stack w='100%' minH='880px' display={['none', 'none', 'none', 'none', 'block']} py={[0, 0, 10]} >
            <Stack maxW='21cm' h='100%' w='100%' align='flex-start' bg='white' p={5} gap={6} ref={componentRef} >
                <Stack w='100%'>
                    <Stack direction='row' alignItems='flex-start' w='100%'>
                        {
                            selector.Profile.email ?
                                <Stack direction='row' align='center' gap={0}>
                                    <EmailIcon size='.9em' />
                                    <Heading fontSize='xs' fontWeight='500'>{selector.Profile.email}</Heading>
                                </Stack>
                                : null
                        }
                        {
                            selector.Profile.phone ?
                                <Stack direction='row' align='center' gap={0}>
                                    <PhoneIcon size='.8em' />
                                    <Heading fontSize='xs' fontWeight='500' mt={0}>{selector.Profile.phone}</Heading>
                                </Stack>
                                : null
                        }
                        {/* <Heading fontSize='xs' fontWeight='500'>{selector.Profile.city}</Heading> */}
                    </Stack>
                    <Stack direction='row' align='center' justify='space-between' maxW='700px' w='100%'>
                        <Stack>
                            <Heading fontSize='3xl' fontWeight='800'>{selector.Profile.fullName}</Heading>
                            <Heading fontSize='xl' fontWeight='500'>{selector.Profile.jobTitle}</Heading>
                        </Stack>
                        {/* {
                                selector.Profile.image ?
                                <Img objectFit='cover' src={URL.createObjectURL(selector.Profile.image)} w={120} borderRadius='50%' h='120px' flexShrink={0} maxW='120px' />
                                : null
                        } */}
                    </Stack>
                </Stack>
                {
                    selector.WorkExperience.length === 0 ? null
                        :
                        <Stack my={5} gap={2} w='100%'>
                            <Stack borderTop='1px solid' borderBottom='1px solid' py={.5}>
                                <Heading fontSize='xl' w='100%' textAlign='center'>Work Experience</Heading>
                            </Stack>
                            {
                                selector.WorkExperience.map(item => {
                                    const formatStartDate = new Date(item.startDate)
                                    const formatEndDate = new Date(item.endDate)
                                    return (
                                        <Stack key={item.id} spacing={0}>
                                            <Stack direction='row' align='center' justify='space-between' gap={4}>
                                                <Stack direction='row' align='center'>
                                                    <Heading fontSize='md' fontWeight={500} >{item.title}</Heading>
                                                    {
                                                        item.info ? <Text fontStyle='italic' fontWeight={400} pt={.6}>at {item.info}</Text>
                                                            : null
                                                    }
                                                </Stack>
                                                <Text fontStyle='italic' fontSize={14}>{formatStartDate.toLocaleDateString("en-US", DATE_OPTIONS)} - {formatEndDate.toLocaleDateString("en-US", DATE_OPTIONS)}</Text>
                                            </Stack>
                                            <Text>{item.city}, {item.country}</Text>
                                            <Text>{item.description}</Text>
                                        </Stack>
                                    )
                                })
                            }
                        </Stack>
                }
                {
                    selector.Skills.length === 0 ? null
                        :
                        <Stack my={5} gap={2} w='100%'>
                            <Stack borderTop='1px solid' borderBottom='1px solid' py={.5}>
                                <Heading fontSize='xl' w='100%' textAlign='center'>Skills</Heading>
                            </Stack>
                            <UnorderedList display='grid' gridTemplateColumns='repeat(3, minmax(100px, 1fr))' w='100%' >
                                {
                                    selector.Skills.map(item => {
                                        return (
                                            <ListItem key={item.id} mx={5} my={2} display='flex' alignItems='center' gap={2}>
                                                <Text fontWeight={700}>{item.title ? item.title.toUpperCase() : null}</Text>
                                                {item.subinfo ? <Text fontStyle='italic' fontSize={14} pt={.3}>({item.subinfo})</Text> : null}
                                            </ListItem>
                                        )
                                    })
                                }
                            </UnorderedList>
                        </Stack>
                }
                {
                    selector.Education.length === 0 ? null
                        :
                        <Stack my={5} gap={2} w='100%'>
                            <Stack borderTop='1px solid' borderBottom='1px solid' py={.5} >
                                <Heading fontSize='xl' w='100%' textAlign='center'>Education</Heading>
                            </Stack>
                            {
                                selector.Education.map((item) => {
                                    const formatStartDate = new Date(item.startDate)
                                    const formatEndDate = new Date(item.endDate)
                                    return (
                                        <Stack key={item.id} spacing={0}>
                                            <Stack direction='row' align='center' justify='space-between' gap={2}>
                                                <Stack direction='row' align='center'>
                                                    <Heading fontSize='lg' fontWeight={500}>{item.title}</Heading>
                                                    {
                                                        item.info ? <Text fontStyle='italic' fontWeight={400} pt={.6}>at {item.info}</Text>
                                                            : null
                                                    }
                                                </Stack>
                                                <Text fontStyle='italic' fontSize={14}>{formatStartDate.toLocaleDateString("en-US", DATE_OPTIONS)} - {formatEndDate.toLocaleDateString("en-US", DATE_OPTIONS)}</Text>
                                            </Stack>
                                            <Text>
                                                {item.city && item.country ? `${item.city}, ${item.country}` :
                                                    item.city ? `${item.city}` :
                                                        item.country ? `${item.country}`
                                                            : null
                                                }
                                            </Text>
                                            <Text>{item.description}</Text>
                                        </Stack>
                                    )
                                })
                            }
                        </Stack>
                }
                {
                    selector.Language.length === 0 ? null
                        :
                        <Stack my={5} gap={2} w='100%'>
                            <Stack borderTop='1px solid' borderBottom='1px solid' py={.5}>
                                <Heading fontSize='xl' w='100%' textAlign='center'>Language</Heading>
                            </Stack>
                            <UnorderedList display='grid' gridTemplateColumns='repeat(3, minmax(100px, 1fr))' w='100%' >
                                {
                                    selector.Language.map((item) => {
                                        return (
                                            <ListItem key={item.id} mx={5} my={2} display='flex' alignItems='center' gap={2}>
                                                <Heading fontSize='md' fontWeight={500}>{item.title}</Heading>
                                                {
                                                    item.info ? <Text fontStyle='italic' fontSize={16} pt={.5}>{item.info}</Text>
                                                        : null
                                                }
                                                <Text pt={.5} fontSize={14}>{item.subinfo ? `(${item.subinfo})` : null}</Text>
                                            </ListItem>
                                        )
                                    })
                                }
                            </UnorderedList>
                        </Stack>
                }
                {
                    selector.Projects.length === 0 ? null
                        :
                        <Stack my={5} gap={2} w='100%'>
                            <Stack borderTop='1px solid' borderBottom='1px solid' py={.5}>
                                <Heading fontSize='xl' w='100%' textAlign='center'>Projects</Heading>
                            </Stack>
                            {
                                selector.Projects.map((item) => {
                                    const formatStartDate = new Date(item.startDate)
                                    const formatEndDate = new Date(item.endDate)
                                    return (
                                        <Stack key={item.id}>
                                            <Stack direction='row' align='center' gap={2}>
                                                <Heading fontSize='lg' fontWeight={500}>{item.title} {item.info ? `at ${item.info}` : null}</Heading>
                                                <Text>({formatStartDate.toLocaleDateString("en-US", DATE_OPTIONS)} - {formatEndDate.toLocaleDateString("en-US", DATE_OPTIONS)})</Text>
                                            </Stack>
                                            <Text>{item.city}, {item.country}</Text>
                                            <Text>{item.description}</Text>
                                        </Stack>
                                    )
                                })
                            }
                        </Stack>
                }
                {
                    selector.Course.length === 0 ? null
                        :
                        <Stack my={5} gap={2} w='100%'>
                            <Stack borderTop='1px solid' borderBottom='1px solid' py={.5}>
                                <Heading fontSize='xl' w='100%' textAlign='center'>Course</Heading>
                            </Stack>
                            {
                                selector.Course.map(item => {
                                    const formatStartDate = new Date(item.startDate)
                                    const formatEndDate = new Date(item.endDate)
                                    return (
                                        <Stack key={item.id}>
                                            <Stack direction='row' align='center' gap={4}>
                                                <Heading fontSize='lg' fontWeight={500} >{item.title} {item.info ? `at ${item.info}` : null}</Heading>
                                                <Text>({formatStartDate.toLocaleDateString("en-US", DATE_OPTIONS)} - {formatEndDate.toLocaleDateString("en-US", DATE_OPTIONS)})</Text>
                                            </Stack>
                                        </Stack>
                                    )
                                })
                            }
                        </Stack>
                }
                {
                    selector.Certificates.length === 0 ? null
                        :
                        <Stack my={5} gap={2} w='100%'>
                            <Stack borderTop='1px solid' borderBottom='1px solid' py={.5}>
                                <Heading fontSize='xl' w='100%' textAlign='center'>Certificates</Heading>
                            </Stack>
                            {
                                selector.Certificates.map((item) => {
                                    return (
                                        <Stack direction='row' key={item.id} align='center' gap={2}>
                                            <Heading fontSize='xl' >{item.title} {item.info ? `at ${item.info}` : null}</Heading>
                                            <Text pt={.5}>{item.subinfo ? `(${item.subinfo})` : null}</Text>
                                        </Stack>
                                    )
                                })
                            }
                        </Stack>
                }

            </Stack>
        </Stack>
    )
}

export default PDFPreview