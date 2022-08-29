import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Center,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Tabs,
    Container,
    Input,
    Progress,
    SimpleGrid,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  export default function MidHome() {
    const navigate=useNavigate();
    const [timer, setTimer] = useState(14400);
    useEffect(()=>{
      const id = setInterval(()=>{
          if(timer < 1){
              clearInterval(id);
          }else if (timer <= 0){
              clearInterval(id);
          }else{
              setTimer((previous)=> previous  - 1 )
          }
        
      },1000)
      return()=>{
          clearInterval(id);
      }
  })
  const handelSearch=(e)=>{
    e.preventDefault();
    navigate("/product")

  }
    return (
      <>
      <Container maxW={['2xl',null,"sm"]} borderColor={'red.400'} color={'gray.900'}>
      <Tabs>
      <TabList  w={['40%',null,"70%"]}>
        <Tab>Stays</Tab>
        <Tab>Flight</Tab>
        <Tab>car</Tab>
        <Tab>Packages</Tab>
        <Tab>Cruies</Tab>
      </TabList>
    
      <TabPanels>
        <TabPanel>
          <SimpleGrid columns={[1, null, 3]} spacing='4px'>
          <Input width={["95%","75%","100%"]} type="text" placeholder='Destination'/>
          <Input width={["95%","75%","100%"]} type="date"/>
          <Input width={["95%","75%","100%"]} type="date" />
         <Input w={[330,null,300]} size='lg' color={'white'} backgroundColor={"blue"} type="submit" value="Search" onClick={handelSearch}/>
         </SimpleGrid>
        </TabPanel>
        <TabPanel>
        <Text  as='b' fontSize='xl' color={'#f8003f'}>{`maintenance break, Service will be available in ${formatTime(timer)} Second`}</Text>
        <Progress size='xs' isIndeterminate />
        </TabPanel>
        <TabPanel>
        <Text  as='b' fontSize='xl' color={'##812bb2'}>{`maintenance break, Service will be available in ${formatTime(timer)} Second`}</Text>
        <Progress size='xs' isIndeterminate />
        </TabPanel>
        <TabPanel>
        <Text  as='b' fontSize='xl' color={'#0073b4'}>{`maintenance break, Service will be available in ${formatTime(timer)} Second`}</Text>
        <Progress size='xs' isIndeterminate />
        </TabPanel>
        <TabPanel>
        <Text  as='b' fontSize='xl' color={'#ffd51e'}>{`maintenance break, Service will be available in ${formatTime(timer)} Second`}</Text>
        <Progress size='xs' isIndeterminate />
        </TabPanel>
        <TabPanel>
        <Text  as='b' fontSize='xl' color={'#217867'}>{`maintenance break, Service will be available in ${formatTime(timer)} Second`}</Text>
        <Progress size='xs' isIndeterminate  />
        </TabPanel>
      </TabPanels>
    </Tabs>
    </Container>
      <Center py={5} >
      <Flex
        w={'1188px'}
        h={'514.28px'} 
        backgroundImage={
          'url(https://a.travel-assets.com/travel-assets-manager/ceorg-1341/US-HP-Hero-D-928x398.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text p={0}
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}  width={'50%'}>
              Members get last minute summer savings
            </Text>
            <Text p={0}  color={'white'} w={'50%'}  fontSize='md' lineHeight={"1rem"} >Plan a last-minute summer getaway with Member Prices of 10% off or more on select hotels.</Text>
            <Stack direction={'row'}>
              <Button
                bg={'#3662D8'}
                rounded={'base'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                See members deals
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      </Center>
      </>
    );
  }

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
 
    return [
      h,
      m > 9 ? m : (h ? '0' + m : m || '0'),
      s > 9 ? s : '0' + s 
    ].filter(Boolean).join(':');
  }
