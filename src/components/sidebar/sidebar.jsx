import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { HomeIcon, IconRes } from '../../assets'
import { auth } from '../../firebase'
import Lessons from '../lessons/lessons'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
const Sidebar = ({show}) => {
    const [user , losding] = useAuthState(auth)
  return (
    <>
       {user && <Box display={{base: 'none' , md: 'block'}} position={'fixed'} left={0} top={'121px'}>
            <Box bg={show ? '#050E17' : 'white'} w={'350px'} h={'100vh'} borderRight={'1px'} borderColor={'#2D2D2D'} overflow={'scroll'}>

                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} p={'20px'} gap={'30px'}>
                    <Link to={'/home'}>
                        <Lessons show={show}  name={"Bosh sahifa"} />
                    </Link>
                    <Link to={'/matematika'}>
                        <Lessons show={show} name={"Matematika Testlari"} />
                    </Link>
                    <Link to={'/inglisGramatika'}>
                        <Lessons show={show} name={"Inglis Tili Gramatika Testlari"} />
                    </Link>
                    <Link to={'/preIelts'}>
                        <Lessons show={show} name={"Inglis Tili Pre Ielts Testlari"} />
                    </Link>
                    <Link to={'/ielts'}>
                        <Lessons show={show} name={"Inglis Tili Ielts Testlari"} />
                    </Link>
                    
                    <Accordion allowMultiple rounded={'10px'} py={'5px'} color={'white'}  bg={show ? '#0A1624' : 'gray.600'}>
                        <AccordionItem border={'none'} >
                        {({ isExpanded }) => (
                            <>
                            <h2>
                                <AccordionButton>
                                <Box as="span" display={'flex'} alignItems={'center'} gap={'20px'} flex='1' textAlign='left'>
                                    <Image src={IconRes} width={'20px'}></Image>
                                    Dasturlash Testlari
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} display={'flex'} flexDirection='column' gap={4}>
                                <Link to={'/html'}>
                                    <Button color={'white'} bg={'transparent'} _hover={{bg: ''}} width={'100%'}>Html Savollari</Button>
                                </Link>
                                <Link to={'/css'}>
                                    <Button color={'white'} bg={'transparent'} _hover={{bg: ''}} width={'100%'}>Css Savollari</Button>
                                </Link>
                                <Link to={'/bootstrap'}>
                                    <Button color={'white'} bg={'transparent'} _hover={{bg: ''}} width={'100%'}>Bootstrap Savollari</Button>
                                </Link>
                                <Link to={'/javascript'}>
                                    <Button color={'white'} bg={'transparent'} _hover={{bg: ''}} width={'100%'}>JavaScript Savollari</Button>
                                </Link>
                            </AccordionPanel>
                            </>
                        )}
                        </AccordionItem>
                    </Accordion>

                    <Accordion allowMultiple rounded={'10px'} py={'5px'}  bg={show ? '#0A1624' : 'gray.600'}>
                        <AccordionItem border={'none'} >
                        {({ isExpanded }) => (
                            <>
                            <h2>
                                <AccordionButton>
                                <Box as="span" display={'flex'} alignItems={'center'} gap={'20px'} flex='1' textAlign='left'>
                                    <Image src={IconRes} width={'20px'}></Image>
                                    Kompyuter Savodxonlik Testlari
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} display={'flex'} flexDirection='column' gap={4}>
                                <Link to={'/word'}>
                                    <Button bg={'transparent'} color={'whte'} _hover={{bg: ''}} width={'100%'}>Word dasturi testlari</Button>
                                </Link>
                                <Link to={'/exel'}>
                                    <Button bg={'transparent'} color={'whte'} _hover={{bg: ''}} width={'100%'}>Exel dasturi testlari</Button>
                                </Link>
                            </AccordionPanel>
                            </>
                        )}
                        </AccordionItem>
                    </Accordion>
                    
                    <Link to={'/bialogiya'}>
                        <Lessons show={show} name={"Bialogiya Testlari"} />
                    </Link>
                    <Link to={'/kimyo'}>
                        <Lessons show={show} name={"Kimyo Testlari"} />
                    </Link>
                    <Link to={'/rus'}>
                        <Lessons show={show} name={"Rus Tili Testlari"} />
                    </Link>
                    <Link to={'/tarix'}>
                        <Lessons show={show} name={"Tarix Testlari"} />
                    </Link>
                    <Link to={'/kids'}>
                        <Lessons show={show} name={"English Kids Testlari"} />
                    </Link>
                </Box>


            </Box>
        </Box>}
    </>
  )
}

export default Sidebar