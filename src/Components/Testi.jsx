import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

export const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

export const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={5}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,

        borderTopColor: useColorModeValue('white', 'gray.800'),
      
      }}>
      {children}
    </Stack>
  );
};

export  const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

export  const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

export default function Testi() {
  return (
    <Box bg={useColorModeValue('white.100', 'white.100')}>
      <Container maxW={'7xl'} py={2} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent><Image src={"https://a.travel-assets.com/travel-assets-manager/ceorg-1424/POSa-HP-Edi-3UP-384x256px.jpg"}/>
              <TestimonialHeading>GET MORE TO GO MORE</TestimonialHeading>
              <TestimonialText>
               Members can duoble dip points on the top of irlies miles</TestimonialText>
            </TestimonialContent>
        
          </Testimonial>
          <Testimonial>
            <TestimonialContent><Image src={"https://a.travel-assets.com/travel-assets-manager/ceorg-1514/HP-Edi-3UP-384x256px.jpg"}/>
              <TestimonialHeading>SUMMER IS A BUZZ IN THE CITY</TestimonialHeading>
              <TestimonialText>
              
Plan a city getaway with member-only deals on select hotels

              </TestimonialText>
            </TestimonialContent>
          
          </Testimonial>
          <Testimonial>
            <TestimonialContent><Image src={"https://a.travel-assets.com/travel-assets-manager/cmct-4898/HP-Editorial-3up-384x256.jpg"}/>
              <TestimonialHeading>YOUR WEEKEND JUST GOT BETTER</TestimonialHeading>
              <TestimonialText>
               Save On the last-minute weekend getaways
              </TestimonialText>
            </TestimonialContent>
           
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}