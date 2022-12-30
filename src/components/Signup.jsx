import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form >
            <VStack alignItems={"center"} spacing={"8"} w={['full','96']} m={'auto'} my={'16'}>
            <Heading>Experience HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
            <Input placeholder={'Name'} type={'text'} required focusBorderColor={'purple.500'} />
            <Input placeholder={'Email'} type={'email'} required focusBorderColor={'purple.500'} />

            <Input placeholder={'Password'} type={'password'} required focusBorderColor={'purple.500'} />
            
{/* 
            <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/forgotpassword'} >Forget Password</Link>
            </Button> */}

            <Button colorScheme={'purple'} type={'submit'} >Sign up</Button>

            <Text textAlign={'right'}>
                Already have an account?{'  '} 
                <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'} >Log In</Link>
                </Button>
            </Text>
           
            
            </VStack>

            
        </form>
    </Container>
  )
}



export default Signup