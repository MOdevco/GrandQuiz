import { ArrowRightIcon,  HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, Heading, Image, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Logo } from '../../assets'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import LeftContent from '../leftContent/leftContent'
import { Link } from 'react-router-dom'

const Navbar = ({show , setShow , handleShow , handleClose}) => {

  const [size, setSize] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')
  const [user , loading] = useAuthState(auth)
  const toast = useToast()
  const sizes = [ 'full']
  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const siginOut = () => {
    auth.signOut()
    toast({
      title: "Siz O'zngizni Frofilingizdan chiqtingiz!",
      description: "",
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }




  return (
    <>
    { user && <Box bg={show ? '#050E17' : 'white'} w={'100%'} zIndex={2} h={{base: '14vh' , md: '12vh'}} px={{base: '20px' , md: ''}} borderBottom={'1px'} borderColor={'#2D2D2D'} position={'fixed'}>
        
        <Flex  maxWidth={'1233px'} mx={'auto'} alignItems={'center'} justifyContent={'space-between'}>
          {user && <Box display={{base: 'block' , md: 'none'}}>
              {sizes.map((size) => (
                <Button onClick={() => handleClick(size)}  color={show ? 'white' : ""} bg={show ? '#0A1624' : 'gray.500'} _hover={{bg: '#222'}}>
                  <HamburgerIcon />
                </Button>
              ))}
              <Drawer  placement={placement} onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent bg={show ? '#0A1624' : 'white'}color={show ? 'white' : 'black'}>
                  <DrawerCloseButton />
                  <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
                  <DrawerBody>
                    <LeftContent />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>}

            <Link to={'/home'}>
              <Box py={5}>
                <Flex alignItems={'center'}>
                  <Image src={Logo} alt={'bu joyda logo bor edi'} width={'70px'}></Image>
                  <Heading fontSize={{base: '20px' , md: '40px'}} color={show ? "white" : 'black'}>Grand Academy</Heading>
                </Flex>
              </Box>
            </Link>


            <Box>
              <Flex alignItems={'center'} gap={'40px'}>
                {show && <Button onClick={handleShow}  display={{base: 'none' , md: 'block'}} _hover={{bg: '#222'}} bg={show ? '#0A1624' : 'gray.200'} color={'gray.300'}>
                    <SunIcon  />
                </Button>}
                {!show && <Button  onClick={handleClose} display={{base: 'none' , md: 'block'}} _hover={{bg: '#222'}} bg={show ? '#0A1624' : 'gray.500'} color={'gray.300'}>
                  <MoonIcon color={show ? 'white' : 'white'}  />
                </Button>} 

                <Menu>

                  <MenuButton>
                    {user && <Avatar src={user && user.photoURL} /> }
                  </MenuButton  >
                  <MenuButton>
                  </MenuButton  >
                  <MenuList  alignItems={'center'} border={'none'}  bg={show ? '#222' : 'gray.300'}>
                    <MenuItem onClick={siginOut} display={'flex'} gap={'10px'}  bg={show ? '#222' : 'gray.300'} color={show ? 'white ': 'black'}>Profildan chiqish<ArrowRightIcon /></MenuItem>                  
                  </MenuList>
                </Menu>
                    {!user && <Avatar  /> }
              </Flex>
            </Box>
        </Flex>
      </Box>}
    
    </>
  )
}

export default Navbar