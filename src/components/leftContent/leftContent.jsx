import { Box, Button, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Lessons from "../lessons/lessons"


const LeftContent = ({show}) => {
  return (
    <>
        
        <Box display={'flex'} flexDirection={'column'} gap={'20px'} fontSize={'20px'}>
            <Link to={'/home'}>
                <Button w={'100%'} bg={show ? 'gray.700' : 'gray.300'}>
                    Bosh sahifa 
                </Button>
            </Link>
            <Link to={'/matematika'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Matematika Testlari

                </Button>
            </Link>
            <Link to={'/inglisGramatika'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Inglis Tili Gramatika 

                </Button>
            </Link>
            <Link to={'/preIelts'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Inglis Tili Pre Ielts  

                </Button>
            </Link>
            <Link to={'/ielts'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Inglis Tili Ielts Testlari 

                </Button>
            </Link>
            <Link to={'/html'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Html Savollari

                </Button>
            </Link>
            <Link to={'/css'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Css Savollari

                </Button>
            </Link>
            <Link to={'/bootstrap'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Bootstrap Savollari

                </Button>
            </Link>
            <Link to={'/javascript'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    JavaScript Savollari

                </Button>
            </Link>
            <Link to={'/word'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Word dasturi testlari

                </Button>
            </Link>
            <Link to={'/exel'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Exel dasturi testlari

                </Button>
            </Link>
            <Link to={'/bialogiya'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Bialogiya Testlari

                </Button>
            </Link>
            <Link to={'/kimyo'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Kimyo Testlari

                </Button>
            </Link>
            <Link to={'/rus'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Rus Tili Testlari

                </Button>
            </Link>
            <Link to={'/tarix'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    Tarix Testlari

                </Button>
            </Link>
            <Link to={'/kids'}>
                <Button w={'100%'} bg={show ? 'gray.100' : 'gray.200'}>
                    English Kids Testlari

                </Button>
            </Link>
        </Box>

    </>
  )
}

export default LeftContent