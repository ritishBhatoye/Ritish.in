import { HStack } from '@chakra-ui/layout'
import Icon from "@chakra-ui/icon"
import React from 'react'
import { FaFacebook,FaGoogle,FaInstagram,FaSnapchat,FaGithub } from 'react-icons/fa'
const Social = () => {
  return (
   <HStack spacing="19.5">
    <a href="https://github.com/ritishBhatoye"><Icon as={FaGithub} boxSize="50" /></a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ritishrahul87@gmail.com&su=SUBJECT&body=BODY&bcc=ritishrahul87@gmail.com"> <Icon as={FaGoogle} boxSize="50" /></a>
     <a href="https://instagram.com/ritish_._?igshid=MzRlODBiNWFlZA=="><Icon as={FaInstagram} boxSize="50" /></a>
     <a href="https://www.snapchat.com/add/ritish_bhatoye"><Icon as={FaSnapchat} boxSize="50" /></a>
     {/* <Icon as={FaShopify} boxSize="50" /> */}
   </HStack>
  )
}

export default Social
