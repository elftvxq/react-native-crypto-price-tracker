import axios from 'axios';

export const getCoinList = async (pageNumber = 1) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=twd&order=market_cap_desc&per_page=25&page=${pageNumber}&sparkline=false`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDetailedCoinData = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCoinMarketChart = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=twd&days=1&interval=hourly`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getWatchlistedCoins = async (pageNumber = 1, coinIds) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=twd&ids=${coinIds}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
