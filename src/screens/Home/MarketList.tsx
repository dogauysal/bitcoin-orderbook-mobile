import { Box, Center, FlatList, Heading, HStack, Icon, Pressable, Spacer, Text } from "native-base";
import React, { useEffect, useState } from "react";
import MarketService from "../../services/MarketService";
import Market from "../../models/Market";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MarketParamList } from "../../navigation/Types";

type MarketScreenNavigationProp = NativeStackScreenProps<MarketParamList, "Market">

const MarketList = ({
    navigation
}: MarketScreenNavigationProp) => {

    const [marketList, setMarketList] = useState<Market[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        fetchAllMarketList();
    }, [])

    const fetchAllMarketList = async () => {
        setIsRefreshing(true);
        await MarketService.getAll().then((markets) => setMarketList(markets)).finally(() => setIsRefreshing(false))
    }

    const renderItem = (market: Market) => {
        return (
            <>
                <Box style={styles.itemContainer}>
                    <HStack style={{ flex: 1 }}>
                        <Heading style={styles.headingContainer}>{market.marketCode}</Heading>
                        <Center style={styles.quoteContainer}>
                            <Text>{market.currentQuote}</Text>
                        </Center>
                        <Center style={styles.arrowcontainer}>
                            {market.change24h == 0 ? <></>
                                : market.change24h > 0 ? <Icon as={FontAwesome5} name="arrow-up" color="green.600" />
                                    : <Icon as={FontAwesome5} name="arrow-down" color="red.600" />}
                        </Center>
                        <Center style={styles.iconContainer}>
                            <Pressable
                                onPress={() => navigation.navigate("MarketDetail", {
                                    marketCode: market.marketCode
                                })}
                            >
                                <Icon as={FontAwesome5} name="chevron-right" />
                            </Pressable>
                        </Center>
                    </HStack>
                </Box>
            </>

        )
    }

    return (
        <Box>
            <FlatList
                data={marketList}
                renderItem={({ item }) => renderItem(item)}
                onRefresh={() => fetchAllMarketList()}
                refreshing={isRefreshing}
            />
        </Box>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        padding: 5
    },
    headingContainer: {
        flex: 3
    },
    quoteContainer: {
        flex: 2,
        marginLeft: 10,
        alignItems: "flex-end"
    },
    arrowcontainer: {
        flex: 0.5
    },
    iconContainer: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: 5
    }
})

export default MarketList;