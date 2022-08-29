import {Flex, Box,FormControl,FormLabel, Input,InputGroup,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Link, Checkbox, } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { LoginEmail } from './Signup';
  
  export default function Login() {
    const [showPassword, setShowPassword] = useState(false); 
    return (
      <Flex
        minH={'1rem'}
        align={'center'}
        justify={'center'} pb={40}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'xl'} py={1} px={2}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign in
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
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
              <Text>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</Text>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <LoginEmail/>
              <Stack pt={-3}>
                <Text align={'center'}>
                Don't have an account? <Link color={'blue.400'}>Create one</Link>
                </Text>
                <Text align={'center'}><Link color={'blue.400'}>Forget Password?</Link>  or continue with
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }