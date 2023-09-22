import React from 'react'
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, name, descripcion, price, categoria}) => {
  return (
    <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
        <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'alt=''/>
        <Stack>
        <CardBody>
            <Heading size='md'> {name} </Heading>     
                        
        </CardBody>
    
        <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                <Link to = {`/item/${id}`}> 
                    Detalle
                </Link>
            </Button>
        </CardFooter>
        </Stack>
    </Card>

  )
}

export default Item