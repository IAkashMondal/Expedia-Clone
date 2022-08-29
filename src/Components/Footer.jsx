import {Box,Container,SimpleGrid,Stack,Text,Flex,useColorModeValue,Image} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ExploreApi,HelpApi,PolicyApi,CompanyApi } from '../Api/Api';

  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'1rem'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={3}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
          <Box>
            <Image
                  src={
                    'https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg'
                  }
                  alt={"LOGO"}
                />
            </Box>
            <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={5}>
            <Stack align={'flex-start'} fontSize={12} >
              <ListHeader>Company</ListHeader>
              {
                    CompanyApi.map((e)=>
                    <NavLink style={isActive => ({ color: isActive ? "#3662D8" : "red"})} key={e.titel} to={e.to} >
                        {e.titel}</NavLink>
                    )
                }
            </Stack>
            <Stack align={'flex-start'} fontSize={12}>
              <ListHeader>Explore</ListHeader>
                {
                    ExploreApi.map((e)=>
                    <NavLink style={isActive => ({ color: isActive ? "#3662D8" : "red"})} key={e.titel} to={e.to} >{e.titel}</NavLink>
                    )
                }
            </Stack>
            <Stack align={'flex-start'} fontSize={12}>
              <ListHeader>Policies</ListHeader>
              {
                    PolicyApi.map((e)=>
                    <NavLink style={isActive => ({ color: isActive ? "#3662D8" : "red"})} key={e.titel} to={e.to} >{e.titel}</NavLink>
                    )
                }
            </Stack>
            <Stack align={'flex-start'} fontSize={12} >
              <ListHeader>Help</ListHeader>
              {
                    HelpApi.map((e)=>
                    <NavLink style={isActive => ({ color: isActive ? "#3662D8" : "red"})} key={e.titel} to={e.to} >{e.titel}</NavLink>
                    )
                }
            </Stack>
            </SimpleGrid>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              
            }}>
          </Flex>
          <Box align={'center'} py={8}>
            <Image 
                  src={
                   "https://images.trvl-media.com/media/content/expind/images/sg/secure.png"
                  }
                  alt={"LOGO"}
                />
            </Box>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.
          </Text>
        </Box>
      </Box>
    );
  }