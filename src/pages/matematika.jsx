import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'

const Matematika = ({show}) => {
    const [currentQuestion , setCurrentQuestion] = useState(0)
    const [showScore , setShowScore] = useState(false)
    const [score , setScore] = useState(0)

    const allQuiz = [
        {
            text: "Exel nechta narsadan tashkil topadi?",
            options: [
                {answersText: "2" ,isCorrect: false},
                {answersText: "1" ,isCorrect: false},
                {answersText: "3" ,isCorrect: true},
                {answersText: "200" ,isCorrect: false}
            ]
        },
        {
            text: "Exelda kletka nma deyiladi?",
            options: [
                {answersText: "Yacheyka" ,isCorrect: true},
                {answersText: "Qator" ,isCorrect: false},
                {answersText: "Ustun" ,isCorrect: false},
                {answersText: "Bilmayman" ,isCorrect: false}
            ]
        },
        {
            text: "Exelda obedenit yacheyka nma degani?",
            options: [
                {answersText: "Bo'lish" ,isCorrect: false},
                {answersText: "Birlashtirish" ,isCorrect: true},
                {answersText: "O'chirish" ,isCorrect: false},
                {answersText: "Qo'llash" ,isCorrect: false}
            ]
        },
        {
            text: "Exelda perenos text nma qiladi?",
            options: [
                {answersText: "Oladi" ,isCorrect: false},
                {answersText: "Qaytaradi" ,isCorrect: false},
                {answersText: "Uzatadi" ,isCorrect: true},
                {answersText: "Bilmayman" ,isCorrect: false}
            ]
        },
        {
            text: "Exelda zalifka nma qilib beradi ?",
            options: [
                {answersText: "Atrofiga rang " ,isCorrect: false},
                {answersText: "Ichiga rang" ,isCorrect: true},
                {answersText: "Rang" ,isCorrect: false},
                {answersText: "Yoniga rang" ,isCorrect: false}
            ]
        },
        {
            text: "Exelda qo'shishni formulasi?",
            options: [
                {answersText: "Min" ,isCorrect: false},
                {answersText: "Summ" ,isCorrect: true},
                {answersText: "Makx" ,isCorrect: false},
                {answersText: "Sredni" ,isCorrect: false}
            ]
        },
        {
            text: "Exelda eng balantni formulasi?",
            options: [
                {answersText: "Summ" ,isCorrect: false},
                {answersText: "Min" ,isCorrect: false},
                {answersText: "Maks" ,isCorrect: true},
                {answersText: "Zalivka" ,isCorrect: false}
            ]
        }
    ]

    const handlerAnswerOptions = (isCorrent) => {
        if(isCorrent) {
          setScore(score + 1)
        }
    
        const handleNextQuestion = currentQuestion + 1;
        if(handleNextQuestion < allQuiz.length) {
          setCurrentQuestion(handleNextQuestion)
        } else {
          setShowScore(true)
        }
      }
    return (
        <Box pl={{base: '20px' , md: '400px'}} pr={{base: '20px' , md: '50px'}} w={'100%'} height={'100vh'}>
        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <Box>
                <Heading color={show ? "white" : "black"}>Exel dasturidan testlar</Heading>
            </Box>
            <Box border={'1px'} borderColor={'#2D2D2D'} rounded={'20px'} pt={'60px'}  px={'50px'} bg={show ? '#233242' : 'white'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  height={{base: '80vh' , md: '60vh'}}>
                {
                    showScore ? (
                        <Box display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={4} flexDirection={'column'} minHeight={'50vh'}>
                            <Heading color={show ? "white" : 'black'} fontSize={{base: '20px' , md: '40px'}} variant={'h3'} size={'md'}>Sizning Natijangiz {score} Ta To'g'ri Javob {allQuiz.length} Ta Savoldan</Heading>
                            <Button color={show ? "white" : 'black'} _hover={{bg: ''}} bg={show ? "#050E17" : "gray.200"} fontSize={'30px'} height={'50px'} width={'100%'} onClick={() => {window.location.reload()}}>Yana Viktorina</Button>
                        </Box>
                        
                    )
                    : (
                        <Box gap={'20px'} display={'flex'} flexDirection={'column'}>
                            <Text fontSize={'20px'} color={'red'}>Eslatib o’tamiz barcha savollaga anniq javob berishga harakat qiling!</Text>
                            <Heading fontSize={'30px'} color={show ? "white" : 'black'}>Savol: {currentQuestion + 1} / {allQuiz.length}</Heading>
                            <Heading color={show ? "white" : 'black'} fontSize={{base: '30px' ,md: '40px'}}>
                                {allQuiz[currentQuestion].text}
                            </Heading>
                            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                                {allQuiz[currentQuestion].options.map((options , i) => (
                                    <Button _hover={{bg: ''}} bg={show ? "#050E17" : "gray.200"} key={i} w={'100%'} color={show ? "white" : 'black'} fontSize={'30px'} onClick={() => handlerAnswerOptions(options.isCorrect)} h={'66px'}>{options.answersText}</Button>

                                ))}
                            </Box>
                        </Box>
                    )
                }
                
            </Box>
        </Box>
    </Box>
    )
}


export default Matematika