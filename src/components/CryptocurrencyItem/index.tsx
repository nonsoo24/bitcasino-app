import CloseIcon from "assets/svg/CloseIcon";
import TrophyIcon from "assets/svg/TrophyIcon";
import React from "react";
import { CurrencyDataType } from "types";

interface ICurrencyItem {
	currency: CurrencyDataType;
	deleteCurrency: (e: React.SyntheticEvent, code: string) => void;
};

const CryptocurrencyItem = ({ currency, deleteCurrency }: ICurrencyItem) => {
	return (
		<div
			title={currency?.currencyCode}
			className='flex items-center justify-between w-full lg:w-[280px] py-3 border-b-[1px] border-bottom'>
			<div className='flex items-center gap-x-8'>
				<TrophyIcon />
				<div className='flex flex-col gap-2'>
					<div className='text-white capitalize'>{currency?.currencyCode}</div>
					<div className='text-[#9484a4] text-[13px]'>
						{Number(currency?.ticker?.lastPrice || 0).toFixed(2)}€
					</div>
				</div>
			</div>

			<button
				type='submit'
				aria-label={`delete ${currency.currencyCode}`}
				title={`delete ${currency.currencyCode}`}
				className='text-white cursor-pointer z-10'
				onClick={(e) => deleteCurrency(e, currency.currencyCode)}>
					<CloseIcon />
			</button>
		</div>
	);
};

export default CryptocurrencyItem;