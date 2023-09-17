import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuItem, MenuList, Box, Flex, Spacer, Center} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>

    <Flex>
    <Box p='4'>
        <Menu>
        
        <MenuButton>
            CATEGORIAS
        </MenuButton>
        
        <MenuList>
        
            <MenuItem>
                <Link to = {`/categoria/${'A'}`}> 
                    Peliculas A 
                </Link>
            </MenuItem>
            
            <MenuItem> 
                <Link to = {`/categoria/${'B'}`}> 
                    Peliculas B
                </Link>
            </MenuItem>
            
            <MenuItem> 
                <Link to = {`/categoria/${'C'}`}> 
                    Peliculas C
                </Link> 
            </MenuItem>
        
        </MenuList>
        
        </Menu>
    </Box>
    <Spacer />
    <Box p='4'>
        <Link to = {"/"}>
            ARG MOVIES
        </Link>
    </Box>
    <Spacer />
    <Box p='4'>
        <Link to = {"/cart"}>
        <CartWidget/>   
        </Link> 
    </Box>
    </Flex>

    

    </>
  )
}

export default NavBar