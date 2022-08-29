import React from 'react'
import { NavLink } from 'react-router-dom'
import{ Flex, Image } from '@chakra-ui/react';

const Error = () => {
  return (
    <Flex>
      <NavLink to={"/"} backgr>
        <Image src={"https://assets.materialup.com/uploads/2ecb2e9c-48ee-498d-bbb4-bae4a791f28a/preview.jpg"} alt="404 Error Page not found"/>
      </NavLink>
    </Flex>
  )
}

export default Error


