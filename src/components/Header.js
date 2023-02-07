import { useColorMode} from '@chakra-ui/color-mode'
import { Stack,Circle,Flex,Box,Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Button, Image } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
    const {colorMode}=useColorMode();
    const isDark=colorMode==="dark";
    const[isNotSmallerScreen]=useMediaQuery("(min-width:600px)");
  return (
  <Stack>
    <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
    <Flex direction={isNotSmallerScreen?"row":"column"}
    spacing="200px" p={isNotSmallerScreen?"32":"0"}
    alignSelf="flex-start">
      <Box mt={isNotSmallerScreen?"0":"16"} align='flex-start'>
       <Text fontSize="5xl"fontWeight="semibold">Hi, I am </Text>
       <Text fontSize="7xl"fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip='text'>Ritish Bhatoye</Text>
       <Text color={isDark?"gray.200":"gray.500"} >GDE - Firebase,React,React Native,FreeLancer,Trader & Entrepreneur</Text>
       <Button mt={8} colorScheme="blue">Hire Me</Button> 
        </Box> 
        <Image alignSelf="center" mt={isNotSmallerScreen?"0":"12"} mb={isNotSmallerScreen?"0":"12"} borderRadius='full' backgroundColor="transparent" boxShadow="lg" boxSize="250px" h="310px" w="300px" src="https://i.pinimg.com/originals/c1/b4/66/c1b4663c5f8114d4f36d4e3f3d51ce8a.jpg"/>
        </Flex> 
    </Stack>
  )
}

export default Header
