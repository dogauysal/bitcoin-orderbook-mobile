import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthenticationNavigator from "./Navigators/AuthenticationNavigator";
import HomeNavigator from "./Navigators/HomeNavigator";
import { RootStackParamList } from "./Types";
import { useAuthState } from 'react-firebase-hooks/auth';
import { authentication } from "../firebase";

const RootStack = () => {
    const [user] = useAuthState(authentication);

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {user ?
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