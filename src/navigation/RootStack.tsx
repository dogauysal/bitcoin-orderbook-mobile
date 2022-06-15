import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthenticationNavigator from "./Navigators/AuthenticationNavigator";
import HomeNavigator from "./Navigators/HomeNavigator";
import { RootStackParamList } from "./Types";

const RootStack = () => {

    let isAuthenticated = false;

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {isAuthenticated ?
                (
                    <>
                        <Stack.Screen
                            name="Home"
                            component={HomeNavigator}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Auth"
                            component={AuthenticationNavigator}
                        />
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default RootStack