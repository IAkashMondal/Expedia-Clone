import {
    Box,
    Container,
    Flex,
    Image,
    Stack,
    useColorModeValue,


  } from '@chakra-ui/react';
import { TestimonialContent, TestimonialHeading, TestimonialText, Testimonial} from './Testi';
  
  export default function TwoImage() {
    return (
        <>
<Flex pt={10} margin={"auto"} justify={"center"} align={"center"}>
<Image src='https://tpc.googlesyndication.com/simgad/16287756609623618350?'/>
</Flex>
        <Box bg={useColorModeValue('white.100', 'white.100')}>
      <Container maxW={'7xl'} py={2} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent><Image src={'https://a.travel-assets.com/travel-assets-manager/cmct-5183/US-CA-MX-HP-Editorial-2up-457x257.jpg'}/>
              <TestimonialHeading>BEYOND YOUR HORIZON</TestimonialHeading>
              <TestimonialText>
               Members can duoble dip points on the top of irlies miles</TestimonialText>
            </TestimonialContent>
        
          </Testimonial>
          <TestimonialContent>
            <TestimonialContent><Image src={"https://a.travel-assets.com/travel-assets-manager/cmct-4862/POSa-HP-Editorial-2up-457x257-No01.jpg"}/>
              <TestimonialHeading>BUZZ AWATIS</TestimonialHeading>
              <TestimonialText>
              
Plan a city getaway with member-only deals on select hotels

              </TestimonialText>
            </TestimonialContent>
          
          </TestimonialContent>
         
        </Stack>
      </Container>
    </Box>
  </>
    )
  }

//   <Stack minH={'200'} direction={{ base: 'column', md: 'row' }}>
//         <Flex flex={1} align={'center'} justify={'center'}>
//         <Flex >
//           <Image
//             alt={'Login Image'}
           
//             src={
//               'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//             }
//           />
//         </Flex>
//         </Flex>
//         <Flex  align={'center'} justify={'center'}>
//           <Image
//             alt={'Login Image'}
//             objectFit={'cover'}
//             src={
//               'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//             }
//           />
//         </Flex>
//       </Stack>