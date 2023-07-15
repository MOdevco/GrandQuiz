import { ArrowUpIcon } from "@chakra-ui/icons"
import { Box, Button, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Route, Routes, useNavigate } from "react-router-dom"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import { auth } from "./firebase"
import Bialogiya from "./pages/bialogiya"
import Bootstrap from "./pages/bootstrap"
import Css from "./pages/css"
import Exel from "./pages/exel"
import Home from "./pages/home"
import Html from "./pages/html"
import InglisGramatika from "./pages/inglisGramatika"
import Javascript from "./pages/javascript"
import Kimyo from "./pages/kimyo"
import Matematika from "./pages/matematika"
import PreIelts from "./pages/preIelts"
import Register from "./pages/register"
import Rus from "./pages/rus"
import Tarix from "./pages/tarix"
import Word from "./pages/word"


function App() {

  const [show , setSow] = useState(true)
  const [user , loading] = useAuthState(auth)
  const navigate = useNavigate()
  const [scroll , setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll' , e => {
      if(window.scrollY > 100) {
        setScroll(true)
      } else 
      setScroll(false)
    })
  } ,[])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleShow = () => {
    setSow(false)
  }
  const handleClose = () => {
    setSow(true)
  }

  useEffect(() => {
    if(!user) {
      navigate('/')
    }
  } , [user])

  

  


  return (
    <Box className={show ? "bg" : "bg2"}  minHeight={'100vh'} w={'100%'} color={'white'} >
      <Box >
        <Navbar handleShow={handleShow} show={show} handleClose={handleClose} setSow={setSow} />
      </Box>


      <Box  pt={'170px'}>
        <Flex >
          <Sidebar show={show} />
          <Routes>
            <Route path="/matematika" element={<Matematika show={show} />}></Route>
            <Route path="/" element={<Register handleShow={handleShow} handleClose={handleClose} show={show} />}></Route>
            <Route path="/home" element={<Home show={show} />}></Route>
            <Route path="/inglisGramatika" element={<InglisGramatika show={show} />}></Route>
            <Route path="/preIelts" element={<PreIelts show={show} />}></Route>
            <Route path="/bialogiya" element={<Bialogiya show={show} />}></Route>
            <Route path="/kimyo" element={<Kimyo show={show} />}></Route>
            <Route path="/rus" element={<Rus show={show} />}></Route>
            <Route path="/tarix" element={<Tarix show={show} />}></Route>
            <Route path="/html" element={<Html show={show} />}></Route>
            <Route path="/css" element={<Css show={show} />}></Route>
            <Route path="/bootstrap" element={<Bootstrap show={show} />}></Route>
            <Route path="/javascript" element={<Javascript show={show} />}></Route>
            <Route path="/word" element={<Word show={show} />}></Route>
            <Route path="/exel" element={<Exel show={show} />}></Route>
          </Routes>
        </Flex>
      </Box>


    {scroll && <Box position={'fixed'} bottom={10} right={10}>
        <Button onClick={scrollUp} bg={'#050E17'} _hover={'#050E39'} height={'60px'}>
          <ArrowUpIcon fontSize={'30px'} />
        </Button>
      </Box>}
      <Box>
        <Footer show={show} />
      </Box>
    </Box>
  )
}

export default App
