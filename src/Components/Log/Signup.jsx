import {Flex, Box,FormControl,FormLabel, Input,InputGroup,HStack, InputRightElement,Stack,Button, Heading,Text,useColorModeValue,Checkbox, Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowBackIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import {  } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box   height={{
      base: '60%', 
      md: '40%', 
      xl: '25%',
    }}>
    <Flex 
      minH={'1rem'}
      align={'center'}
      justify={'center'} pb={10}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={1} px={2} >
        <Stack align={'center'}>
          <Flex align={"center"}  justify={"space-evenly"}>
            <NavLink to={"/"}><ArrowBackIcon w={20} h={50}/></NavLink>
          <Heading fontSize={'4xl'} textAlign={'center'}>
          Create an account
          </Heading>
          </Flex>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              // onChange={formik.handleChange}
              // isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Keep me signed in
            </Checkbox>
            <Text fontSize='md' noOfLines={[1, 2, 3]}
      >Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</Text>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Continue
              </Button>
            </Stack>
            <Stack >
              <Text align={'center'}>
                Already a user? <NavLink to={"/sign-in"}><Text color={"#3662D8"}>Signin</Text></NavLink>
              </Text>
            </Stack>
          </Stack>
                <LoginEmail/>
        </Box>
      </Stack>
    </Flex>
    </Box>
  );
}

export const LoginEmail=()=> {
  return (
    <Center p={2}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}