import {React, useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrenyChange,
    currencyOptions = [],
    selectCurreny = 'usd',
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label
                htmlFor={amountInputId} 
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}

                    // incase onAmountChange method not able to be called so we used && to avoid the crash
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurreny}
                    onChange={(e) => onCurrenyChange && onCurrenyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        // whenever we apply loop in jsx then we nned to use the key to enhence the performance
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;