import { NavigatorScreenParams } from "@react-navigation/native";
export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthParamList>;
    Home: undefined;
};

export type AuthParamList = {
    Login: undefined;
    Register: undefined;
}

export type MarketParamList = {
    Market: undefined;
    MarketDetail: {
        marketCode: string
    };
    Profile: undefined
}