import React from 'react';
import { Box, Flex, Button, Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorMode, Center } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link to="/">Logo</Link>
        </Box>

        <Flex alignItems="center">
          <Link to="/">
            <Button variant="link" mr={4}>
              Home
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="link" mr={4}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="link" mr={4}>
              Register
            </Button>
          </Link>
          <Link to="/favorites">
            <Button variant="link" mr={4}>
              Favorites
            </Button>
          </Link>

          <Button onClick={toggleColorMode} mr={4}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar
                size="sm"
                src="https://avatars.dicebear.com/api/male/username.svg"
                alt="User Avatar"
              />
            </MenuButton>
            <MenuList alignItems="center">
              <br />
              <Center>
                <Avatar
                  size="2xl"
                  src="https://avatars.dicebear.com/api/male/username.svg"
                  alt="User Avatar"
                />
              </Center>
              <br />
              <Center>
                <p>Username</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>
                <Link to="/logout">Logout</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
