import React from 'react'
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react'

const Item = ({name, descripcion, price, categoria}) => {
  return (
    <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
    >
        <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
        />
    
        <Stack>
        <CardBody>
            <Heading size='md'> {name} </Heading>
    
            <Text color='blue.600' fontSize='2xl'>
                {descripcion}
            </Text>

            <Text color='blue.600' fontSize='2xl'>
                Categoria: {categoria}
            </Text>

            <Text color='blue.600' fontSize='2xl'>
                Precio: ${price}
            </Text>


        </CardBody>
    
        <CardFooter>
            <Button variant='solid' colorScheme='blue'>
            Detalle
            </Button>
           {/* <Button variant='ghost' colorScheme='blue'>
            Add to cart
            </Button>*/}
        </CardFooter>
        </Stack>
    </Card>

  )
}

export default Item