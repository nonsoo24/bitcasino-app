import CryptocurrencyItem from "components/CryptocurrencyItem";
import React from "react";
import { CurrencyDataType } from "types";

interface ICryptocurrencyList {
	currencies: CurrencyDataType[];
	setCurrencies: (currency: CurrencyDataType[]) => void;
};

const CryptocurrencyList = ({ currencies, setCurrencies }: ICryptocurrencyList) => {
	const deleteCurrency = (e: React.SyntheticEvent, currencyCode: string) => {
		e.preventDefault();
		setCurrencies(currencies.filter((coin) => coin.currencyCode !== currencyCode));
	};

	return (
		<div className="mt-[32px] z-[20] pb-[28px]" data-testid="crypto-list">
			{currencies?.map((item) => (
				<CryptocurrencyItem
					key={item.currencyCode}
					currency={item}
					deleteCurrency={(e)=> deleteCurrency(e, item.currencyCode)} 
				/>
			))}
		</div>
	);
};

export default CryptocurrencyList;
