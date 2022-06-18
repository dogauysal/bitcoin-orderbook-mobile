import React from "react";
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, View, VStack, Text, KeyboardAvoidingView } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParamList, RootStackParamList } from "../../navigation/Types";
import { StyleSheet } from "react-native";

type LoginScreenNavigationProp = NativeStackScreenProps<AuthParamList, "Login">

const Login = ({
    navigation
}: LoginScreenNavigationProp) => {

    return (
        <KeyboardAvoidingView
            behavior="padding"
        >
            <Center h="100%" w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Welcome
                    </Heading>
                    <Heading mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Sign in to continue!
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" />
                        </FormControl>
                        <Button mt="2" colorScheme="indigo">
                            Sign in
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                I'm a new user.{" "}
                            </Text>
                            <Link _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} onPress={() => navigation.navigate("Register")}>
                                Sign Up
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </KeyboardAvoidingView>

    )
}
export default Login