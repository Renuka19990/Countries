import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, useToast } from '@chakra-ui/react';
import authService from '../../services/authService';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.register(username, password);
            toast({
                title: "Registration successful.",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Registration failed.",
                description: "Please try again.",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <Box maxW="sm" mx="auto" mt="10" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <Heading mb="6" textAlign="center">Register</Heading>
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
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default RegisterForm;
