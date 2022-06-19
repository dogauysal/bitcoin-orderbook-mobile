
export default interface order {
    1: number;
    0: number
}

export default interface MarketData {
    asks: order[];
    bids: order[];
    sequenceId: number;
}
