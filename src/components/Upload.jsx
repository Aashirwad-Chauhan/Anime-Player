import React from 'react'
import {Container, VStack, HStack, Button, Input} from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container
        maxW={"container.xl"}
        h={'100vh'}
        p={'16'}
    >
        <VStack
            color={'purple.500'}
            h={'full'}
            justifyContent={'center'}
        >
            <AiOutlineCloudUpload size={'10vmax'} />
            <form>
                <HStack>
                    <Input required type={'file'} css={{
                        "&::file-selector-button":{
                            border:"none",
                            width:"calc(100% +36px)",
                            height:"100%",
                            marginLeft:"-18px",
                            color:"purple",
                            backgroundColor:"white",
                            cursor:"pointer",
                        },
                        }}
                    />
                        <Button colorScheme={'purple'} type={'submit'}> 
                            Upload Anime!
                        </Button>
                </HStack>
            </form>
        </VStack>

    </Container>
  )
}

export default Upload;