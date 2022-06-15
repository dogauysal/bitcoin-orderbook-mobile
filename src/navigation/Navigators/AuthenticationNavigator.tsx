import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Authentication/Login';
import Register from '../../screens/Authentication/Register';

const AuthenticationNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen
                name='Register'
                component={Register}
                options={{
                    headerShown: true,
                    title: "Create New User"
                }}
            />
        </Stack.Navigator>
    )

}

export default AuthenticationNavigator