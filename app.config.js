module.exports = {
  // The default network and its associated config the app should connect to
  // on start. App will automatically switch network configs when user switches
  // networks in their wallet.
  // Ocean Protocol contracts are deployed for: 'mainnet', 'rinkeby', 'development'
  network: process.env.GATSBY_NETWORK || 'rinkerby',
  infuraProjectId: process.env.GATSBY_INFURA_PROJECT_ID || '6ba6f1f72b954dc894e9d117fa37e013',
  // The ETH address the marketplace fee will be sent to.
  marketFeeAddress:
    process.env.GATSBY_MARKET_FEE_ADDRESS ||
    '0xc966Ba2a41888B6B4c5273323075B98E27B9F364',
  // Used for conversion display, can be whatever coingecko API supports
  // see: https://api.coingecko.com/api/v3/simple/supported_vs_currencies
  currencies: [
    'EUR',
    'USD',
    'CAD',
    'GBP',
    'SGD',
    'HKD',
    'CNY',
    'JPY',
    'INR',
    'RUB',
    'ETH',
    'BTC',
    'LINK'
  ],

  // Config for https://github.com/donavon/use-dark-mode
  darkModeConfig: {
    classNameDark: 'dark',
    classNameLight: 'light',
    storageKey: 'oceanDarkMode'
  },

  // Analytics
  analyticsId: process.env.GATSBY_ANALYTICS_ID || 'xxx'
}
