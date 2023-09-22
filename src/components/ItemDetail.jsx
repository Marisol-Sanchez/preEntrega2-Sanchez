import React from 'react'
import {Card, CardBody, CardFooter, CardHeader, Center, Heading, Text} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({productos}) => {

    const {id} = useParams()

    const filteredProducts = productos.filter((producto) => producto.id == id)

  return (
    <div>
        {filteredProducts.map((p) => {
            return (
                <div key= {p.id}>
                    <Center p= '1rem'>
                        <Card>
                            <CardHeader>
                                <Heading size= 'md'>{p.name} </Heading>
                            </CardHeader>
                            <CardBody>
                                
                                <Text> Precio: ${p.price} </Text>
                                <Text> Descripcion: {p.descripcion} </Text>
                                <Text> Categoria: {p.categoria} </Text>

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