export default interface Market {
    marketCode: string;
    currentQuote: number;
    change24h: number;
    change24hPercent: number;
    highestQuote24h: number;
    lowestQuote24h: number;
    weightedAverage24h: number;
    volume24h: number;
}
