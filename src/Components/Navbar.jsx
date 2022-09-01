
import React, { useContext, useState } from 'react'
import {Box,Flex,Text,IconButton,Stack,Collapse,Icon,Link,Popover,PopoverTrigger,PopoverContent,useColorModeValue,
  useDisclosure,Image,  HStack, Button, Divider, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, VStack, SimpleGrid } from '@chakra-ui/react';
import {  VscCombine } from "react-icons/vsc";
import {RiHotelFill, RiShipFill } from "react-icons/ri";
import { IoCarSportSharp, IoSearch, IoTicketSharp } from "react-icons/io5";
import { MdOutlineFlight } from "react-icons/md";
import {ChevronDownIcon, ChevronRightIcon,} from '@chakra-ui/icons';
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { RouteApi } from '../Api/Api';
import { Authcontext } from '../Context/AuthContext';



const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const[auth,setAuth]=useState(false)
  const handelSetAuth=()=>{
    setAuth(true)
  }
  return (
    <>
    <nav>
    <Box>
        <Flex 
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={[4,200]}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')} justify={"space-around"}
          align={'center'}>  
          <Flex flex={{ base: 1 }} >
            <Flex align={"center"}>
              <NavLink to={"/"}>
            <Image
                  src={
                    'https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2'
                  }
                  alt={"LOGO"}
                /></NavLink>
                <Flex display={{ base: 'none', md: 'flex' }} ml={10} >
              <MoreTravel/>
            </Flex>
            </Flex>
            <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }} justify={"space-evenly"}>
            <IconButton
              onClick={onToggle}
              _focus={{ bg: 'none' }}
              icon={
                isOpen ? <IoSearch/> : <IoSearch/>
              }
              variant={'ghost'}
            />
            <IconButton
              onClick={handelSetAuth}
              _focus={{ bg: 'none' }} 
              icon={
                auth? <CgProfile  /> : <CgProfile/>
              }
              variant={'ghost'}
            />
          </Flex>
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} >
              <DesktopNav />
            </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        <Collapse in={auth} animateOpacity>
          <Singupfailed/>
        </Collapse>
      </Box>    </nav>
    </>
  )
}

export default Navbar
const DesktopNav = () => {
  const {Auth}=useContext(Authcontext)
  const linkHoverColor = useColorModeValue('#3662D8');
  return (
    <Flex alignItems='center' gap='2'>
      <Box>

    </Box>
    <Box>
    <HStack  flex={{ base: 1, md: 0 }} 
            justify={'flex-end'}
            direction={'row'}fontWeight={"medium"}
            spacing={6}> {RouteApi.map((item)=>
      <NavLink key={item.id} to={item.to}><Flex justify={'center'} align={"center"} gap={"3px"} _hover={{color: linkHoverColor,
      }}>{item.titel}{item.text}</Flex></NavLink>)}
      {
        Auth? <Signupsucess/>:  <Singupfailed/>
      }
      
      </HStack>
      </Box>
      </Flex>
  );
};

const MoreTravel =()=>{
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return(
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.id}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}{<ChevronDownIcon w={5} h={5}/>}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.titel} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}
const DesktopSubNav = ({titel,icon,to }) => {
  return (
    <Box
    role={'group'}
    display={'block'} 
    rounded={'md'}
    _hover={{ bg: useColorModeValue('blue.200', 'gray.900') }}>
    <Stack direction={'row'} align={'center'}>
      <Flex alignItems='center' gap='2'>
        <Text
          transition={'all .3s ease'}
          _groupHover={{ color: 'pink.400' }}
          fontWeight={500}>
        </Text>
        <NavLink to={to}><Flex gap={"3px"} align={"center"} justify={'center'}>{icon}{titel}</Flex></NavLink>
      </Flex>
      <Flex
        transition={'all .3s ease'}
        transform={'translateX(-10px)'}
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify={'flex-end'}
        align={'center'}
        flex={1}>
        <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }} >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({children}) => {
  return (
    <Stack spacing={4} >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <NavLink key={child.titel} to={child.to}><Flex gap={"3px"} align={"center"} justify={'center'}>{child.icon}{child.titel}</Flex></NavLink>
            ))}
        </Stack>
    </Stack>
  );
};
const Singupfailed =()=>{
  return(
     <>

<Popover >
  <PopoverTrigger>
    <Button variant={"ghost"} _hover={{bg:useColorModeValue("none"),color:useColorModeValue("#3662D8")}}>Sign in</Button>
  </PopoverTrigger>
  <PopoverContent >
    <PopoverArrow />
    <PopoverCloseButton />
    <Box  textAlign={"left"} padding={"5px"}>
    <PopoverHeader lineHeight={10}> You could be getting lower prices</PopoverHeader>
    <PopoverBody >
    <Text fontSize={"sm"} noOfLines={2}  width={'110%'}>Save 10% or more on thousands of properties with member prices.</Text>
    <VStack gap={3} padding={5}   >
    <VStack  
    rounded={'md'}
     >
                <NavLink to="/sign-in"><Button _hover={{ bg: useColorModeValue('blue.200', 'gray.900') }}>Sign in</Button></NavLink>
                <NavLink to="sign-up"><Text _hover={{ color: useColorModeValue('#007aff')}}>Signup,it's free</Text></NavLink>
                </VStack>
                <NavLink to="*"><Text _hover={{ color: useColorModeValue('#007aff')}} >List of your favorites</Text></NavLink>
                <NavLink to="*"><Text _hover={{ color: useColorModeValue('#007aff')}}>Expedia Reward</Text></NavLink>
                <Divider/>
                <NavLink to="*"><Text _hover={{ color: useColorModeValue('#007aff')}}>Feedback</Text></NavLink>
    </VStack>
    </PopoverBody>
    </Box>
    
  </PopoverContent>
</Popover>
        </>
      )
    
  
}
const Signupsucess =()=>{
  const {Auth,handelLogin,handellogOut}=useContext(Authcontext)
  return(
     <>

<Popover >
  <PopoverTrigger>
    <Button variant={"ghost"} _hover={{bg:useColorModeValue("none"),color:useColorModeValue("#3662D8")}}>Akash Mondal</Button>
  </PopoverTrigger>
  <PopoverContent >
    <PopoverArrow />
    <PopoverCloseButton />
    <Box  textAlign={"left"} padding={"5px"}>
    <PopoverHeader lineHeight={10}> You could be getting lower prices</PopoverHeader>
    <PopoverBody >
    <Text fontSize={"sm"} noOfLines={2}  width={'110%'}>Save 10% or more on thousands of properties with member prices.</Text>
    <VStack gap={3} padding={5}   >
    <VStack  
    rounded={'md'}
     >
                <NavLink to="/"><Button _hover={{ bg: useColorModeValue('blue.200', 'gray.900') }} onClick={handellogOut} >Sign Out</Button></NavLink>
                </VStack>
                <NavLink to="*"><Text _hover={{ color: useColorModeValue('#007aff')}} >List of your favorites</Text></NavLink>
                <NavLink to="*"><Text _hover={{ color: useColorModeValue('#007aff')}}>Expedia Reward</Text></NavLink>
                <Divider/>
                <NavLink to="*"><Text _hover={{ color: useColorModeValue('#007aff')}}>Feedback</Text></NavLink>
    </VStack>
    </PopoverBody>
    </Box>
    
  </PopoverContent>
</Popover>
        </>
  )
}


export const NAV_ITEMS = [
  {
    label: 'More Travels',
    id:"l1",
    children: [
      {
        titel:"Stays",
        to:"/stays",
        icon:<RiHotelFill/>
    },
    {
        titel:"Flights",
        to:"/flights",
        icon:<MdOutlineFlight/>

    },
    {
        titel:"Cars",
        to:"/cars",
        icon:<IoCarSportSharp/>
    },
    {
        titel:"Packages",
        to:"/pacakages",
        icon:<VscCombine/>
    },
    {
        titel:"Things to do",
        to:"/things-to-do",
        icon:<IoTicketSharp/>
    },
    {
        titel:"Cruies",
        to:"/cruises",
        icon:<RiShipFill/>
    },
    {
        titel:"Deals",
        to:"/deals",
        icon:""
    },
    {
        titel:"Group & meetings",
        to:"/Group-meetings",
        icon:""
    }
  ]}];
  console.log(NAV_ITEMS )