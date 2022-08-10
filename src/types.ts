export type CurrencyDataType = {
	currencyCode: string;
	marketSymbol: string;
	ticker: {
		lastPrice: string;
		__typename: string;
	};
};