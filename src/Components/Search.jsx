import { Box, Flex, Input, Spacer, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MobileNavItemApi } from '../Api/Api'


const Search = () => {
  return (
    <div>
        <Spacer />
      <Box  borderWidth='1px' borderRadius='lg' overflow='hidden' py={25} mt={2} md={2} >
      <Flex borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
           {MobileNavItemApi.map((navitem)=>
           <NavLink to={navitem.to}>{navitem.titel}</NavLink>)}
      </Flex>
      </Box>
  
    </div>
  )
}

export default Search
