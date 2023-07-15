import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IconRes } from '../../assets'

const Lessons = ({name , show}) => {
  return (
    <Box>
        <Button width={'100%'} height={'50px'} _hover={{bg: '#0A1650'}} bg={show ? '#0A1624' : 'gray.600'} display={'flex'} justifyContent={'flex-start'} gap={5}>
            <Image src={IconRes} w={'20px'}></Image>
            <Text color={'white'}>
              {name}
            </Text>
        </Button>
    </Box>
  )
}

export default Lessons