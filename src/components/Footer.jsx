import { Box, Heading, VStack,Stack, HStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
        <Stack direction={["column", "row"]}>
            <VStack alignItems={"strech"} w={"full"} px={"4"}>
                <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={"2px solid white"} py="2" >
                    <Input placeholder='Enter Email here...' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor={"none"}/>
                    <Button p={"0"} colorScheme={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"}>
                        <AiOutlineSend size={"20"}/>
                        </Button>
                </HStack>
            </VStack>

            <VStack w={"full"} borderLeft={["none", "1px"]} borderRight={["none", "1px"]}>
                <Heading  textTransform={"uppercase"} textAlign={"center"} >Experience HUB</Heading>
                <Text>All right reserved</Text>
            </VStack>

            <VStack w={"full"} >
                <Heading size={"md"} textTransform={"uppercase"}>Social  media</Heading>
                <Button variant={"link"} colorScheme={"white"} >
                    <a target={"blank"} href='https://in.linkedin.com/'>Linkedin</a>
                </Button>

                <Button variant={"link"} colorScheme={"white"} >
                    <a target={"blank"} href='https://www.instagram.com/'>Instagram</a>
                </Button>

                <Button variant={"link"} colorScheme={"white"} >
                    <a target={"blank"} href='https://github.com/VedantSrivastava03'>Github</a>
                </Button>

            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer