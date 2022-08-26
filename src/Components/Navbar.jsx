import { Box,Image, Menu, MenuButton, MenuItem, MenuList,Button } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { AiOutlineGlobal,} from "react-icons/ai";
import React from 'react'
import Footer from './Footer'
import MidHome from './MidHome'
import { NavLink } from 'react-router-dom'
import { MobileNavItemApi } from '../Api/Api'


const Navbar = () => {
  return (
    <>
    <nav>
        <Box>
        <Image src={"https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2"}alt={"LOGO"}/>
            <Box>
            <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>Actions</MenuButton>
    <MenuList>{
    MobileNavItemApi.map((item)=>
    <MenuItem component={NavLink} to={item.to} ><Image src={item.icon}/> {item.titel}{<ChevronRightIcon/>}</MenuItem>)}
  </MenuList>
</Menu>
            </Box>
        </Box>
        
        <Box>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>Actions</MenuButton>
    <MenuList>

    <MenuItem ><AiOutlineGlobal/> English</MenuItem>
  </MenuList>
</Menu>
        </Box>
    </nav>
 {/* Navbar eds----------------------------------------------------------------------> */}
 {/* midpage & footer imported----------------------------------------------------------------- */}
      <MidHome/>
     <Footer/>
    </>
  )
}

export default Navbar
