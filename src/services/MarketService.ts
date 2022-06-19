import { async } from '@firebase/util';
import axios, { AxiosResponse } from 'axios';
import Market from '../models/Market';
import MarketData from '../models/MarketData';

class MarketService {

    getAll = async () => {
        const response = await axios.get<Market[]>(`https://api4.bitlo.com/market/ticker/all`);

        return response.data;
    }

    getMarketBidsByCode = async (marketCode: string) => {
        const response = await axios.get<MarketData>(`https://api4.bitlo.com/market/orderbook?market=${marketCode}&depth=50`)

        return response.data;
    }

}

export default new MarketService();
