import { Box, Button, Center, Flex, Heading, Image, Text, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Google, Logo } from '../assets'
import { signInWithPopup , GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'

const Register = ({show}) => {
    const navigate = useNavigate()
    const [user , loading] = useAuthState(auth)
    const googleProvider = new GoogleAuthProvider
    const toast = useToast()

    const handleUser = async () => {
        try {
            const res = await signInWithPopup(auth , googleProvider)
            toast({
                title: "Siz O'zngizni Frofilingizga kirdingiz!",
                description: "",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
        } catch {
            console.log("error")
        }
    }



    useEffect(() => {
        if(user) {
            navigate('/home')
            
        }
    } , [user])


  return (
    <Box display={'flex'} p={{base: '20px' , md: '0'}} justifyContent={'center'} alignItems={'center'} minHeight={{base: '50vh' , md: '70vh'}} w={'100%'}>
        <Box height={'400px'} width={'600px'} rounded={'20px'} bg={show ?  '#050E17' : 'white'} p={'20px'} border={'1px'} borderColor='#2D2D2D'>
            <Flex flexDirection={'column'} justifyContent={'space-between'} gap={'40px'}>
                <Center>
                    <Box >
                        <Flex flexDirection={'column'} justifyContent={'center'} alignContent={'center'} width={'100%'}>
                            <Image src={Logo} width={'100px'}></Image>
                            <Text fontWeight={'bold'} color={show ? 'white' : 'black'}>Grand Academy</Text>
                        </Flex>
                    </Box>
                </Center>
                <Box>
                    <Heading color={show ? 'white' : 'black'} fontSize={'20px'} textAlign={'center'}>
                        Siz Google Akauntingiz Yordamida Ro'yhatdan O'tasiz!
                    </Heading>
                </Box>
                <Box>
                    <Button onClick={handleUser} w={'100%'} bg={show ? 'gray.800' : 'gray.400'} _hover={{bg: ''}} h={'60px'}>
                        <Image width={'40px'} src={Google}></Image>
                        <Text fontSize={{base: '13px' , md: '20px'}} color={'white'} fontWeight={'bold'}>Google yordamida kirish</Text>
                    </Button>
                </Box>
            </Flex>
        </Box>

    </Box>
  )
}

export default Register