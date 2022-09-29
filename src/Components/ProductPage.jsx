import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  Spacer,
  SimpleGrid,
  Badge,
  Image,
  Button,
  WrapItem,
  Input,
  Text,
  Divider,
  Checkbox,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  VStack,
  RangeSlider,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowBackIcon, StarIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { useState } from 'react';


const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function ProductPage({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Navbar/>
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SimpleGrid columns={2} spacing={20} >
            <Box>
            <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
            </Box>
      
      <Spacer/>
      <Box  paddingLeft={300}> 
      <DisplayData/>
      </Box>
      </SimpleGrid>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
    <Footer/>
    </>
  );
}


const SidebarContent = ({ onClose,data,rest }) => {
    let [x,setX]=React.useState(0)
    let[newarr,setNewarr]=useState([])
    let  handlesortstar=(val)=>{
        setX(val)
        let newarr=data.filter((el)=>(el.ratings>val))
        console.log(data,"datsss")
         setNewarr(newarr)
      }
      
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <NavLink to={"/"}><ArrowBackIcon w={20} h={50}/></NavLink>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
     <Box>
        <Box p={2}>
            <Text>Search by name</Text>
            <Input placeholder='Seacrch here'/>
        </Box>
        <Divider/>
        <Box p={2}> 
            <Text>Rating</Text>
            <VStack display={'flex'} align={"flex-start"}>
            <Checkbox >5 star</Checkbox>
            <Checkbox ><>4 star</></Checkbox>
            <Button onClick={()=>handlesortstar(3)} >3 star</Button>
            <Checkbox onClick={()=>handlesortstar(2)} > 2 star</Checkbox>
            <Checkbox  onClick={()=>handlesortstar(1)} >1 star</Checkbox>
            </VStack>
        </Box >
        <Divider/>
        <Box p={2}> 
            <Text>Filter By</Text>
            <>Popular filters</>
            <VStack display={'flex'} align={"flex-start"}>
            <Checkbox >Hot Tub</Checkbox>
            <Checkbox >Spa</Checkbox>
            <Checkbox >Free airport shuttle</Checkbox>
            <Checkbox > Bank of American Stadium</Checkbox>
            <Checkbox >Hotel resort</Checkbox>
            </VStack>
        </Box >
        <Divider/>
        <Box>
        </Box>
     </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};



const DisplayData=()=> {
    const navigate=useNavigate();
    const handelBook=()=>{
        alert("Hottle Booked Sucessfull" + "\n"  `Oder Toekn :${Date.now()}`);
        navigate("/")
    }
const[data,setData]=useState([])
useEffect(()=>{
fetch(`http://localhost:8080/Hotels`)
.then((res)=> res.json())
.then((res)=>setData(res))
},[data])

    return (
        <>
        {
            data.map((property)=>
                <Box maxW='lg' key={property.id} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <SimpleGrid columns={2} spacing={10} >
                        <Flex>
        <Image src={property.img} alt={property.title} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            Usa
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h3'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.descrition}
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h1'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.Features}
          </Box>
  
          <Box>
           Today's Price ${property.Price}
            <Box as='span' color='gray.600' fontSize='sm'>
              / day
            </Box>
          </Box>
          <Box>
           Regular Price: ${property.offerPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / day
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.ratings ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviews}
            </Box>
          </Box>
          <Button onClick={handelBook} colorScheme='linkedin'>Book</Button>
        </Box>
        </Flex>
        </SimpleGrid>
      </Box>
            )
        }
        </>
    )
  }
