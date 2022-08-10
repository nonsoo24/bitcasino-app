import React from "react";
import { useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CurrencyDataType } from "types";
import { PRICE } from "query/query";

export default function useCrytocurrency() {
    const [currencies, setCurrencies] = React.useState<CurrencyDataType[]>([]);
    const [code, setCode] = React.useState<string>("");
    const [currencyCode, setCurrencyCode] = React.useState<string>("");

    const [fetchPrices, { loading, error }] = useLazyQuery(PRICE,
        {
            variables: {
                input: currencyCode
            },
            fetchPolicy: "network-only",
            onCompleted: (data) => {
                let cryptoCurrencyExist = currencies?.find((code: CurrencyDataType) => code.currencyCode === currencyCode);

                if (cryptoCurrencyExist) {
                    toast.error("Cryptocurrency already exists");
                    setCode("");
                    return;
                }

                if (data && !data?.markets?.length) {
                    toast.error("Cryptocurrency not found");
                    setCode("");
                    return;
                }

                setCurrencies(
					(state: CurrencyDataType[]) =>
						(state = [{ ...data?.markets[0], currencyCode }, ...state])
				);

                setCode("");
            },
            onError: (error) => {
                toast.error(error.message);
            }
        });

    return { currencies, code, loading, error, setCode, setCurrencies, setCurrencyCode, fetchPrices };
}