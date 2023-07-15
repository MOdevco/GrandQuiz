import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Lessons from "../lessons/lessons"

const LeftContent = () => {
  return (
    <>
        <Box >
            <Box  w={'350px'} h={'100vh'} >

                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} p={'20px'} gap={'30px'}>
                    <Link to={'/home'}>
                        <Lessons  name={"Bosh sahifa"} />
                    </Link>
                    <Link to={'/matematika'} >
                        <Lessons  name={"Matematika Testlari"} />
                    </Link>
                    <Link to={'/inglisGramatika'}>
                        <Lessons name={"Inglis Tili Gramatika Testlari"} />
                    </Link>
                    <Link to={'/preIelts'}>
                        <Lessons name={"Inglis Tili Pre Ielts Testlari"} />
                    </Link>
                    <Link to={'/ielts'}>
                        <Lessons name={"Inglis Tili Ielts Testlari"} />
                    </Link>
                    <Link to={'/dasturlash'}>
                        <Lessons name={"Dasturlash Testlari"} />
                    </Link>
                    <Link to={'/kompyuter'}>
                        <Lessons name={"Kompyuter Savodxonlik Testlari"} />
                    </Link>
                    <Link to={'/bialogiya'}>
                        <Lessons name={"Bialogiya Testlari"} />
                    </Link>
                    <Link to={'/kimyo'}>
                        <Lessons name={"Kimyo Testlari"} />
                    </Link>
                    <Link to={'/rus'}>
                        <Lessons name={"Rus Tili Testlari"} />
                    </Link>
                    <Link to={'/tarix'}>
                        <Lessons name={"Tarix Testlari"} />
                    </Link>
                    <Link to={'/kids'}>
                        <Lessons name={"English Kids Testlari"} />
                    </Link>
                </Box>


            </Box>
        </Box>
    </>
  )
}

export default LeftContent