import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'

  import {Link} from "react-router-dom";
  import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button
      pos={'fixed'}
      top={'4'}
      left={'4'}
      colorScheme='facebook'
      zIndex={'overlay'}
      p={'0'}
      w={'10'}
      h={'10'}
      borderRadius={'full'}
      onClick={onOpen}
      >  
      <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                ANIME HUB
            </DrawerHeader>

            <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                    <Link to={'/'}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                    <Link to={'/anime'}>Anime</Link>
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                    <Link to={'/anime?category=action'}>Action Anime</Link>
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                    <Link to={'/upload'}>Upload</Link>
                </Button>
            </VStack>

            <HStack 
            pos={'absolute'} 
            bottom={'10'} 
            left={'0'}
            w={'full'}
            justifyContent={'space-evenly'}
            >
                <Button onClick={onClose} variant={"outline"} colorScheme='purple'>
                    <Link to={'/login'}>Login</Link>
                </Button>

                <Button onClick={onClose} variant={"outline"} colorScheme='purple'>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
            </HStack>

            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
