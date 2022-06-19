import { View } from "native-base";
import React from "react";
import { ActivityIndicator } from "react-native";

const Loader = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
        </View>
    )
}

export default Loader