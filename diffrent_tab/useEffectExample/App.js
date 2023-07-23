import { useEffect, useState } from "react";

export default function App() {
    const [amount, setAmount] = useState(1);
    const [fromCurr, setFromCurr] = useState("EUR");
    const [toCur, setToCur] = useState("USD");
    const [converted, setConverted] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        function () {
            setIsLoading(true);
            const convert = async () => {
                const res = await fetch(
                    `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCur}`
                );
                const data = await res.json();
                setConverted(data.rates[toCur]);
                setIsLoading(false);
            }
            if (fromCurr === toCur) return setConverted(amount);
            convert();
        },
        [amount, toCur, fromCurr]
    );
    return (
        <div className="App">
            <h1>Conversion Data</h1>
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
                disabled={isLoading}
            />
            <select
                value={fromCurr}
                onChange={(e) => setFromCurr(e.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select
                value={toCur}
                onChange={(e) => setToCur(e.target.value)}
                disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>
                {converted} {toCur}
            </p>
        </div>
    );
}
