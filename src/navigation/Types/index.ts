import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthParamList>;
    Home: undefined;
};

export type AuthParamList = {
    Login: undefined;
    Register: undefined;
}