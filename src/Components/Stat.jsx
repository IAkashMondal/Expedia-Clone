import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  

  function StatsCard(props) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'2xl'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'medium'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function Stats() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={1} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Here to help keep you on the move
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard  stat={'Change or Cancel trips'}title={'Make update to your itinerary or cancel booking'} />
          <StatsCard stat={'Use Credit card or Coupo '}  title={'Apply a coupon code or credit toa new Trip'}/>
          <StatsCard  stat={'Track your Refund'} title={'Check the status of a Refund currently in progess'}/>
        </SimpleGrid>
      </Box>
    );
  }