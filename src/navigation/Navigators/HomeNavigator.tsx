import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Market from '../../screens/Home/Market';
import MarketDetail from '../../screens/Home/MarketDetail';
import Profile from '../../screens/Home/Profile';

const HomeNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Market' component={Market} />
            <Stack.Screen name='MarketDetail' component={MarketDetail} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export default HomeNavigator