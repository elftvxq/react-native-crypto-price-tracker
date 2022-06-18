import React, { useContext, createContext } from 'react';

const WatchListContext = createContext();

// customized hooks, can directly import to use
export const useWatchlist = () => useContext(WatchListContext);

const WatchListProvider = ({ children }) => {
  return (
    <WatchListContext.Provider value={{ value: 'yay' }}>
      {children}
    </WatchListContext.Provider>
  );
};
export default WatchListProvider;
