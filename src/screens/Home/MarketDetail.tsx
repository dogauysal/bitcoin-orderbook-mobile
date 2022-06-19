import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Center, FlatList, Heading, HStack, VStack, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import order from "../../models/MarketData";
import MarketData from "../../models/MarketData";
import { MarketParamList } from "../../navigation/Types";
import MarketService from "../../services/MarketService";

type MarketDetailScreenNavigationProp = NativeStackScreenProps<MarketParamList, "MarketDetail">

const MarketDetail = ({
    navigation,
    route
}: MarketDetailScreenNavigationProp) => {

    const [data, setData] = useState<MarketData>();
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        let marketCode = route.params["marketCode"]

        navigation.setOptions({ title: marketCode })

        if (marketCode) {
            let splitMarketCode = marketCode.split('-');

            setCurrency(splitMarketCode[0]);
        }

        fetchMarketBids(marketCode)

    }, [])

    const fetchMarketBids = async (marketCode: string) => {
        await MarketService.getMarketBidsByCode(marketCode).then((data) => {
            setData(data)
        })
    }

    const calculateTotal = (a: number, b: number) => {
        return (a * b).toFixed(3)
    }

    const renderBid = (bid: order) => {
        return (
            <HStack style={styles.bidRow}>
                <Center style={styles.bidColumn}><Text
                    style={{
                        color: "green"
                    }}
                >{bid[0]}</Text> </Center>
                <Center style={styles.bidColumn}><Text>{bid[1]}</Text> </Center>
                <Center style={styles.bidColumn}><Text >{calculateTotal(bid[0], bid[1])}</Text> </Center>
            </HStack>
        )
    }

    const renderAsk = (ask: order) => {
        return (
            <HStack style={styles.bidRow}>
                <Center style={styles.bidColumn}><Text
                    style={{
                        color: "red"
                    }}
                >{ask[0]}</Text> </Center>
                <Center style={styles.bidColumn}><Text>{ask[1]}</Text> </Center>
                <Center style={styles.bidColumn}><Text >{calculateTotal(ask[0], ask[1])}</Text></Center>
            </HStack>
        )
    }

    return (
        <VStack style={styles.container}>
            <HStack style={styles.headerContainer}>
                <Center style={styles.headerColumn}><Text style={styles.headerText}>Fiyat</Text></Center>
                <Center style={styles.headerColumn}><Text style={styles.headerText}>Miktar({currency})</Text></Center>
                <Center style={styles.headerColumn}><Text style={styles.headerText}>Toplam(TRY)</Text></Center>
            </HStack>
            <Box style={styles.orderListContainer}>
                <FlatList
                    data={data ? data.bids : []}
                    renderItem={({ item }) => renderBid(item)}
                    style={{
                        borderBottomColor: "gray",
                        borderBottomWidth: 1
                    }}
                />
            </Box>
            <Box style={styles.orderListContainer}>
                <FlatList
                    data={data ? data.asks : []}
                    renderItem={({ item }) => renderAsk(item)}
                />
            </Box>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    headerColumn: {
        flex: 1,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    orderListContainer: {
        flex: 1
    },
    bidRow: {
        flex: 1,
    },
    bidColumn: {
        flex: 1,

    }
})

export default MarketDetail;