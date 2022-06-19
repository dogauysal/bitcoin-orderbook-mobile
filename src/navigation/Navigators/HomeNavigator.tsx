import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketList from '../../screens/Home/MarketList';
import MarketDetail from '../../screens/Home/MarketDetail';
import Profile from '../../screens/Home/Profile';
import { Icon, IconButton } from 'native-base';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Market List'
                component={MarketList}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <IconButton
                            icon={<Icon as={FontAwesome5} name="user-circle" size={6}
                                onPress={() => navigation.navigate("Profile")}
                            />} />
                    )
                })}
            />
            <Stack.Screen
                name='MarketDetail'
                component={MarketDetail}

            />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export default HomeNavigator