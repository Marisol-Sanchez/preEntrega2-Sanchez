import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuItem, MenuList, Box, Flex, Spacer, Center} from "@chakra-ui/react"

const NavBar = () => {
  return (
    <>

    <Flex>
    <Box p='4'>
        <Menu>
        <MenuButton>
            OPCIONES
        </MenuButton>
        <MenuList>
            <MenuItem> Peliculas </MenuItem>
            <MenuItem> Surcursales </MenuItem>
            <MenuItem> Combos </MenuItem>
        </MenuList>
        </Menu>
    </Box>
    <Spacer />
    <Box p='4'>
        ARG MOVIES
    </Box>
    <Spacer />
    <Box p='4'>
        <CartWidget/>    
    </Box>
    </Flex>

    

    </>
  )
}

export default NavBar