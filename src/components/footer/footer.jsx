import { Box } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

const Footer = ({show}) => {
  const [user , loading] = useAuthState(auth)

  return (

    <>
      { user && <Box bg={show ? '#050E17' : "white"} color={show? 'white' : 'black'} borderTop={'1px'} mt={'100px'} borderColor={'#2B2929'} minHeight={'10vh'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} width={'100%'}   pl={{base: '20px' , md: '400px'}}>
        Footer
       </Box>}
    </>
  )
}

export default Footer