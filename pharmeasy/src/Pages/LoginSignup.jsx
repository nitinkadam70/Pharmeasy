import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Flex,
  Img,
  Text
} from '@chakra-ui/react'

const LoginSignup = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button fontWeight='400' letterSpacing='1px' fontSize='15px' ref={btnRef} colorScheme='#10847e' onClick={onOpen}>
        Login/Signup
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box bg='#10847e' w='440px' h='110px' p='20px 20px 20px 40px'>
            <Flex gap='2%'>
              <Box w='180px' h='55.5px'>
                <Img maxH='100%' maxW='100%' src='https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png' />
              </Box>
              <Box w='120px' h='80px'>
                <Img maxH='100%' maxW='100%' src='https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg' />
              </Box>
            </Flex>
          </Box>
          <DrawerHeader>Quick Login / Register
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder='Enter your phone number' />
            <br />
            <br />
            <Button width='100%' color='#fff' _hover='#10847e' bg='#10847e'>Continue</Button>
            <br />
            <br />
            <Text fontSize='12px'>By clicking continue, you agree with our Privacy Policy</Text>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default LoginSignup