import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react"
import GoogleIcon from '../components/Icons/GoogleIcon'

function Login() {

    
    
    return (
        <Stack maxW='480px' w='100%' h='560px' bg='white' margin='auto auto' p={5} justify='center' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' borderRadius={6}>
            <Stack w='100%' justify='center' align='center' gap={4} >
                <FormControl maxW='250px' w='100%' margin='0 auto' display='flex' flexDirection='column' gap={6}>
                    <Stack spacing={0}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input bg='white' type='email' placeholder="Email" id="email" variant='unstyled' p='.5rem 0' borderBottom='1px solid grey' borderRadius={0}/>
                    </Stack>
                    <Stack spacing={0}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input bg='white' type='password' placeholder="Password" id="password" variant='unstyled' p='.5rem 0' borderBottom='1px solid grey' borderRadius={0}/>
                    </Stack>
                    <Button variant='unstyled' w='100%' mt={5} bg='lightblue'>Log In</Button>
                </FormControl>
                <Stack maxW='250px' w='100%'>
                    <Button w='100%' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' bg='white' gap={2} >
                        <GoogleIcon />
                        <Text>Log In with Google</Text>
                    </Button>
                </Stack>
            </Stack>
        </Stack>    
    )
}

export default Login