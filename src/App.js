import { Heading, VStack,Flex, IconButton, useColorMode, Spacer, Link } from "@chakra-ui/react";
import {FaSun,FaMoon,FaInstagram,FaLinkedin, FaGithub} from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";


function App() {
  const {colorMode,toggleColorMode}=useColorMode()
  const isDark=colorMode==="dark";
  return (

       <VStack p={5}>
    <Flex w="100%">
   <Heading 
   ml="8" size="lg" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip='text'>Rahul</Heading> 
    
    <Spacer></Spacer>
 <IconButton  icon={<FaLinkedin />} isRound='true'></IconButton>
    <IconButton ml={2} icon={<FaInstagram/>} isRound='true' ></IconButton>
    <IconButton ml={2} icon={<FaGithub/>} isRound='true' ></IconButton>
    <IconButton ml={8} icon={isDark ? <FaSun />:<FaMoon />} isRound='true'></IconButton>
    </Flex>
    <Header></Header>
    <Social></Social>
    <Profile></Profile>
    </VStack>
  );
}

export default App;
