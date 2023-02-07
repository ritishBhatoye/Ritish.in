import { HStack } from '@chakra-ui/layout'
import Icon from "@chakra-ui/icon"
import React from 'react'
import { FaFacebook,FaGoogle,FaShopify,FaSnapchat,FaSpotify } from 'react-icons/fa'
const Social = () => {
  return (
   <HStack spacing="19.5">
     <Icon as={FaFacebook} boxSize="50" />
     <Icon as={FaGoogle} boxSize="50" />
     <Icon as={FaSpotify} boxSize="50" />
     <Icon as={FaSnapchat} boxSize="50" />
     <Icon as={FaShopify} boxSize="50" />
   </HStack>
  )
}

export default Social
