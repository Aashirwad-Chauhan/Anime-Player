import React from 'react'
import {Box, Heading, Image, Container, Stack, Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOption = {
  pos:"absolute",
  left:"50%",
  top:"20%",
  transform:"translate(-50%, -50%)",
  textTransform:"uppercase",
  p:'4',
  size:"3xl",
}

const Home = () => {
  return (
    <Box>
    <MyCarousel />

    <Container maxW={Container.xl} minH={'100vh'} p="16"> 
      <Heading 
        textTransform={"uppercase"} 
        m="auto" 
        py="2" 
        w={"fit-content"}
        borderBottom={"2px solid"}
        > Services 
      </Heading>

      <Stack
      h="full"
      p={'4'}
      alignItems={'center'}
      directions={["column", "row"]}
      >
        <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
        <Text
        letterSpacing={"widest"}
        lineHeight={"190%"}
        p={["4", "16"]}
        textAlign={['center', 'left']}
        > Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla optio,
          cumque suscipit quam amet obcaecati nostrum esse. Provident, optio sint minus aliquam
          fugiat est aliquid et magni? Autem, veniam!
        </Text>
      </Stack>

    </Container>

    </Box>
  );
};

const MyCarousel =()=>(
  <Carousel 
  autoPlay 
  infiniteLoop 
  interval={100} 
  showStatus={false} 
  showThumbs={false}>

    <Box w={'full'} h={'100vh'}> 
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}> Watch The Future</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}> 
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOption}> Future is Gaming</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}> 
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}> Bhosdike</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}> 
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}> Madarchod</Heading>
    </Box>

  </Carousel>
)

export default Home;
