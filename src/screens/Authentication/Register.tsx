import { Field, Formik, FormikHelpers } from "formik";
import { Box, Button, Text, Center, FormControl, Heading, Input, KeyboardAvoidingView, VStack } from "native-base";
import React, { useState } from "react";
import { User } from "../../models/User";
import * as yup from 'yup'
import YupPassword from 'yup-password'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebase";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthParamList } from "../../navigation/Types";

type RegisterScreenNavigationProp = NativeStackScreenProps<AuthParamList, "Register">

const Register = ({
    navigation
}: RegisterScreenNavigationProp) => {

    YupPassword(yup)

    const RegisterUser = (user: User, formikActions: FormikHelpers<User>) => {

        createUserWithEmailAndPassword(authentication, user.Email, user.Password)
            .then((res) => {
                if (res.user && !res.user.getIdToken()) {
                    navigation.goBack()
                }
            })

        formikActions.resetForm();
    }

    const user: User = {
        Name: "",
        Surname: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    }

    return (
        <KeyboardAvoidingView>
            <Formik
                initialValues={user}
                onSubmit={(values, formikActions) => RegisterUser(values, formikActions)}
                validationSchema={yup.object().shape({
                    Name: yup.string().required("Please enter your name"),
                    Surname: yup.string().required("Please enter your surname"),
                    Email: yup.string().email("Please enter valid email").required("Please enter your mail"),
                    Password: yup.string().password()
                        .min(8)
                        .minLowercase(1)
                        .minUppercase(1)
                        .minSymbols(1)
                        .minNumbers(1)
                        .required("Please enter password"),
                    ConfirmPassword: yup.string().oneOf([yup.ref('Password'), null], "Password must match")
                })}
            >
                {({ values, touched, errors, isSubmitting, isValid, handleChange, handleSubmit, handleBlur }) => {
                    return (
                        <VStack alignItems={"center"}>
                            <Center w="100%">
                                <Box safeArea p="2" w="90%" maxW="290" py="8">
                                    <VStack space={3} mt="5">
                                        <FormControl isRequired>
                                            <FormControl.Label>Name</FormControl.Label>
                                            <Input
                                                value={values.Name}
                                                onChangeText={handleChange("Name")}
                                                onBlur={handleBlur("Name")}
                                            />
                                            {touched.Name && errors.Name &&
                                                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Name}</Text>
                                            }
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormControl.Label>Surname</FormControl.Label>
                                            <Input
                                                value={values.Surname}
                                                onChangeText={handleChange("Surname")}
                                                onBlur={handleBlur("Surname")}
                                            />
                                            {touched.Surname && errors.Surname &&
                                                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Surname}</Text>
                                            }
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormControl.Label>Email</FormControl.Label>
                                            <Input
                                                value={values.Email}
                                                onChangeText={handleChange("Email")}
                                                onBlur={handleBlur("Email")}
                                            />
                                            {touched.Email && errors.Email &&
                                                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Email}</Text>
                                            }
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormControl.Label>Password</FormControl.Label>
                                            <Input
                                                type="password"
                                                secureTextEntry
                                                value={values.Password}
                                                onChangeText={handleChange("Password")}
                                                onBlur={handleBlur("Password")}
                                            />
                                            {touched.Password && errors.Password &&
                                                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Password}</Text>
                                            }
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormControl.Label>Confirm Password</FormControl.Label>
                                            <Input
                                                type="password"
                                                secureTextEntry
                                                value={values.ConfirmPassword}
                                                onChangeText={handleChange("ConfirmPassword")}
                                                onBlur={handleBlur("ConfirmPassword")}
                                            />
                                            {touched.ConfirmPassword && errors.ConfirmPassword &&
                                                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.ConfirmPassword}</Text>
                                            }
                                        </FormControl>
                                        <Button
                                            mt="2"
                                            colorScheme="indigo"
                                            onPress={() => handleSubmit()}
                                            disabled={!isValid}
                                            style={!isValid ? { backgroundColor: "grey" } : {}}
                                        >
                                            Sign up
                                        </Button>
                                    </VStack>
                                </Box>
                            </Center >
                        </VStack>
                    )
                }}

            </Formik>

        </KeyboardAvoidingView>


    )
}

export default Register;