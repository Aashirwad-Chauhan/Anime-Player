import React from 'react';
import {Box, Stack, VStack, HStack, Heading, Button, Input, Text} from '@chakra-ui/react';
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box 
    bgColor={'black'}
    minH={'40'}
    p='16'
    color={'white'}
    > 

    <Stack direction={["column", "row"]}>
        <VStack 
        alignItems={"stretch"}
        w={'full'}
        px='4'
        >
            <Heading size={"md"} textTransform={"uppercase"} textAlign={['center', 'left']}> Dekho Anime!!</Heading>
            <HStack
                borderBottom={"2px solid white"}
                py="2"
            >
                <Input 
                    placeholder='Enter Email Here..'
                    border={'none'}
                    borderRadius={"none"}
                    outline="none"
                />
                
                <Button
                p={"0"}
                colorScheme="orange"
                variant={"ghost"}
                borderRadius={'0 20px 20px 0'}
                >
                <AiOutlineSend size={20} />
                </Button>
            </HStack>
        </VStack>

        <VStack 
        w="full"
        borderLeft={["none","1px solid white"]}
        borderRight={["none","1px solid white"]}
        >
            <Heading
                textTransform={"uppercase"}
                textAlign={"center"}
            >
                Anime Hub!
            </Heading>
            <Text>
                All Rights Reserved.
            </Text>    
        </VStack>    

        <VStack 
        w="full"
        >
            <Heading
                size="md"
                textTransform={"uppercase"}
            >
                Follow Us!
            </Heading>

            <Button variant={"link"} colorScheme={"white"}>
                <a target={"_blank"} href='https://github.com/Aashirwad-Chauhan'> 
                    GitHub!!!!
                </a>
            </Button>

            <Button variant={"link"} colorScheme={"white"}>
                <a target={"_blank"} href='https://github.com/Aashirwad-Chauhan'> 
                    Crunchyroll!!!!
                </a>
            </Button>

            <Button variant={"link"} colorScheme={"white"}>
                <a target={"_blank"} href='https://github.com/Aashirwad-Chauhan'> 
                    Leetcode!!!!
                </a>
            </Button>
        </VStack>  

    </Stack>
    </Box>
  );
};

export default Footer;
