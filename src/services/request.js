import axios from 'axios';

export const getCoinList = async (page) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=twd&order=market_cap_desc&per_page=25&page=1&sparkline=false`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
