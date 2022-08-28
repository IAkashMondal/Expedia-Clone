
import React from 'react'
import {Box,Flex,Text,IconButton,Button,Stack,Collapse,Icon,Link,Popover,PopoverTrigger,PopoverContent,useColorModeValue,
  useDisclosure,Image, extendTheme } from '@chakra-ui/react';
import {  VscCombine } from "react-icons/vsc";
import {RiHotelFill, RiShipFill } from "react-icons/ri";
import { IoCarSportSharp, IoSearch, IoTicketSharp } from "react-icons/io5";
import { MdOutlineFlight } from "react-icons/md";
import {ChevronRightIcon,} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'
import MidHome from './MidHome'
import Signup from './Log/Signup';



const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
    <nav>
    <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box>
            <Image
                  src={
                    'https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2'
                  }
                  alt={"LOGO"}
                />
            </Box>
            <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              _focus={{ bg: 'none' }}
              icon={
                isOpen ? <IoSearch  /> : <IoSearch/>
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>

    </nav>
 {/* Navbar eds----------------------------------------------------------------------> */}
 {/* midpage & footer imported----------------------------------------------------------------- */}
    <Signup/> <MidHome/>
     <Footer/>
    </>
  )
}

export default Navbar
const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
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
                {navItem.label}
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
  );
};

const DesktopSubNav = ({titel,icon,to }) => {
  return (
    <Box
    role={'group'}
    display={'block'}
    p={2}
    rounded={'md'}
    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
    <Stack direction={'row'} align={'center'}>
      <Flex alignItems='center' gap='2'>
        <Text
          transition={'all .3s ease'}
          _groupHover={{ color: 'pink.400' }}
          fontWeight={500}>
        </Text>
        {/* <Box>{icon}</Box> */}
        <NavLink to={to}>{titel}</NavLink>
      </Flex>
      <Flex
        transition={'all .3s ease'}
        transform={'translateX(-10px)'}
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify={'flex-end'}
        align={'center'}
        flex={1}>
        <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
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
    <Stack spacing={4} onClick={children }>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <NavLink key={child.titel} py={2} to={child.to}><Stack><Text>
                {/* {child.icon} */}
              {child.titel}</Text></Stack></NavLink>
            ))}
        </Stack>
    </Stack>
  );
};


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