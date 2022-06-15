import { Box, Button, Center, FormControl, Heading, Input, VStack } from "native-base";
import React from "react";

const Register = () => {

    return (
        <VStack alignItems={"center"}>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Surname</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input type="password" />
                        </FormControl>
                        <Button mt="2" colorScheme="indigo">
                            Sign up
                        </Button>
                    </VStack>
                </Box>
            </Center >
        </VStack>

    )
}

export default Register;