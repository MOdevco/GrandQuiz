import { Box, Heading, Spinner } from '@chakra-ui/react'

const Rus = () => {
  return (
    <Box pl={{base: '20px' , md: '400px'}} width={'100%'} height={'100vh'}>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} minHeight={'100vh'}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
        <Heading fontSize={{base: '20px' , md: '40px'}}>
          Bu Bo'limda Hozircha Testlar Mavjud Emas
        </Heading>
      </Box>
    </Box>
  )
}

export default Rus