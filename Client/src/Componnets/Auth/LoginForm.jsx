import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, useToast } from '@chakra-ui/react';
import authService from '../../services/authService';
import { AuthContext } from '../../Context/authContext';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await authService.login({ username, password });
            setAuth(data.token);
            toast({
                title: "Login successful.",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            navigate('/');
        } catch (error) {
            toast({
                title: "Login failed.",
                description: "Please check your username and password.",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <Box maxW="sm" mx="auto" mt="10" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <Heading mb="6" textAlign="center">Login</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" colorScheme="teal" width="full" mt="4">
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
