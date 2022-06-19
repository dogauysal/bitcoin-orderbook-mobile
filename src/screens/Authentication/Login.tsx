import React, { useContext } from "react";
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, VStack, Text, KeyboardAvoidingView } from "native-base";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParamList } from "../../navigation/Types";
import { RootStoreContext } from "../../stores/rootStore";
import { Formik, FormikHelpers } from "formik";
import * as yup from 'yup'
type LoginScreenNavigationProp = NativeStackScreenProps<AuthParamList, "Login">

const Login = ({
    navigation
}: LoginScreenNavigationProp) => {

    const rootStore = useContext(RootStoreContext);
    const { login } = rootStore.authStore;

    type field = {
        email: string;
        password: string;
    }

    const LoginUser = async (email: string, password: string, formikActions: FormikHelpers<field>) => {
        await login(email, password);

        formikActions.resetForm();
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
        >
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(values, formikActions) => LoginUser(values.email, values.password, formikActions)}
                validationSchema={yup.object().shape({
                    email: yup.string().required("Please enter your email"),
                    password: yup.string().required("Please enter your password")
                })}
            >
                {({ values, touched, errors, isSubmitting, isValid, handleChange, handleSubmit, handleBlur }) => {
                    return (
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
                                    <FormControl isRequired>
                                        <FormControl.Label>Email</FormControl.Label>
                                        <Input
                                            value={values.email}
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                        />
                                        {touched.email && errors.email &&
                                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
                                        }
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input
                                            type="password"
                                            value={values.password}
                                            onChangeText={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                        />
                                        {touched.password && errors.password &&
                                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
                                        }
                                    </FormControl>
                                    <Button
                                        mt="2"
                                        colorScheme="indigo"
                                        onPress={() => handleSubmit()}
                                        disabled={!isValid}
                                        style={!isValid ? { backgroundColor: "grey" } : {}}
                                    >
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

                    )
                }}

            </Formik>

        </KeyboardAvoidingView>

    )
}
export default Login