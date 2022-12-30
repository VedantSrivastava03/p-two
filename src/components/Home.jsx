import { Box, Heading, Image,Container, Stack,Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import  "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.webp'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'
import img5 from '../assets/5.webp'

const headingOptions= {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:'4',
    size:"4xl"
}

const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container  maxW={"container.xl"} minH={"100vh"} p="16">
            <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">Services</Heading>

            <Stack
                h="full"
                p={"4"}
                alignItems={"center"}
                direction={["column","row"]}
                >
                    <Image src={img5} h={["40","400"]} filter={"hue-rptate(-130deg)"}/>
                    <Text letterSpacing={"widest"} lineHeight={"190%"} textAlign={"center"}>
                    Welcome to Experience HUB Support and Services. Our mission is to provide you with best-in-class expertise and support so you can get the help you need to succeed, when you need it. For technical issues of all complexities, We offers a variety of free and fee-based premium support options to our users at any stage of their project.Get assistance with non-technical issues like account activations, Hub errors, account management, billing, the Asset Store and more. 
                    </Text>
            </Stack>

        </Container>
    </Box>
  )
}

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w={"full"} h={"100dvh"}>
            <Image src={img1}/>
            
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions} >Watch the future</Heading>

        </Box>

        <Box w={"full"} h={"100dvh"}>
            <Image src={img2}/>
            
            <Heading bgColor={'whiteAlpha.900'} color={"black"} {...headingOptions} >Fututre is gaming</Heading>

        </Box>

        <Box w={"full"} h={"100dvh"}>
            <Image src={img3}/>
            
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions} >Gaming on Console</Heading>

        </Box>

        <Box w={"full"} h={"100dvh"}>
            <Image src={img4}/>
            
            <Heading bgColor={'whiteAlpha.600'} color={"black"} {...headingOptions} > Game Night </Heading>

        </Box>

    </Carousel>
)

export default Home