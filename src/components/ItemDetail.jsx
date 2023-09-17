import React from 'react'
import {Card, CardBody, CardFooter, CardHeader, Center, Heading, Text} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({productos}) => {

    const {id} = useParams()

    const filteredProducts = productos.filter((producto) => producto.id == id)


  return (
    <div>
        {productos.map((p) => {
            return (
                <div key= {p.id}>
                    <Center p= '1rem'>
                        <Card>
                            <CardHeader>
                                <Heading size= 'md'>{p.name} </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text> {p.name} </Text>
                                <Text> {p.descripcion} </Text>
                                <Text> {p.categoria} </Text>
                                <Text> {p.precio} </Text>
                            </CardBody>
                            <CardFooter>
                                
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            )
        })}

    </div>
    )
}

export default ItemDetail