import React, { lazy } from "react";
import useCrytocurrency from "hooks/useCrytocurrency";
import HeroHeadline from "components/Hero/HeroHeadline";

const CryptocurrencyList = lazy(() => import("components/CryptocurrencyList"));
const Form = lazy(() => import("components/Form"));

const Hero = () => {
	const {
		currencies,
		code,
		loading,
		error,
		setCode,
		setCurrencyCode,
		fetchPrices,
		setCurrencies,
	} = useCrytocurrency();

	if (error)
		return (
			<p style={{ color: "red", paddingTop: "2rem", fontSize: "1.5rem" }}>
				 {`Error! ${error}`}
			</p>
		);

	return (
		<main className="my-4 lg:mt-10 lg:mb-9" data-testid="hero">
			<section>
				<div className="w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between">
					<HeroHeadline
						title={`Now you can track \nall your cryptos here!`}
						subtitle={`	Just enter the \ncryptocurrency code on the \nform to the right.`}
					/>

					<Form
						setCode={setCode}
						setCurrencyCode={setCurrencyCode}
						fetchPrices={fetchPrices}
						currencyCode={code}
						isLoading={loading}
					/>
				</div>

				<CryptocurrencyList currencies={currencies} setCurrencies={setCurrencies} />
			</section>
		</main>
	);
};


export default Hero;
