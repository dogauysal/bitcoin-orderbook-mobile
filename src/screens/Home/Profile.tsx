import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Center, Heading, Icon, Text, VStack } from 'native-base';
import React, { useContext } from 'react';
import { FontAwesome5 } from "@expo/vector-icons";
import { MarketParamList } from '../../navigation/Types';
import { StyleSheet } from 'react-native';
import { RootStoreContext } from '../../stores/rootStore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { authentication } from '../../firebase';

type ProfileScreenNavigationProp = NativeStackScreenProps<MarketParamList, "Profile">

const Profile = ({
    navigation
}: ProfileScreenNavigationProp) => {
    const rootStore = useContext(RootStoreContext);
    const { logout } = rootStore.authStore

    const [user] = useAuthState(authentication)

    return (
        <Center style={styles.container}>
            <VStack>
                <Center style={styles.boxContainer}>
                    <Icon as={FontAwesome5} name='user-circle' size={75} />
                </Center>
                <Center style={styles.boxContainer}>
                    <Text fontSize={35}>{user?.displayName}</Text>
                </Center>
                <Center style={styles.boxContainer}>
                    <Text fontSize={30}>{user?.email}</Text>
                </Center>
                <Center style={styles.boxContainer}>
                    <Button
                        size="lg"
                        colorScheme="danger"
                        onPress={() => logout()}
                    >
                        <Text color="white" fontSize={20}>Logout</Text>
                    </Button>
                </Center>
            </VStack>
        </Center>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    boxContainer: {
        marginVertical: 10
    }
})

export default Profile;