import { useEffect, useState } from "react";

function AppCoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState("");
  const [usd, setUSD] = useState("");
  const [calc, setCalc] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangeSelect = (event) => {
    setSelected(event.target.value);
    setCalc(event.target.value);
  };

  const onChangePrice = (event) => {
    setUSD(event.target.value);
    if (event.target.value === "") {
      setCalc(selected);
      return;
    }
    setCalc(event.target.value / selected);
  };

  return (
    <div>
      <h1>The Coins ! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChangeSelect}>
            {coins.map((coin, index) => (
              <option key={index} value={Math.round(coin.quotes.USD.price)}>
                {coin.name} ({coin.symbol}): {Math.round(coin.quotes.USD.price)}{" "}
                USD
              </option>
            ))}
          </select>
          <input
            disabled={selected === "" ? true : false}
            type="text"
            placeholder="Type USD ..."
            value={usd}
            onChange={onChangePrice}
          />
          <span>
            <input
              type="text"
              placeholder="Select coin to be Converted..."
              value={calc}
              readOnly
            />
            {calc === 1 ? "Coin" : "Coins"}
          </span>
          <ul>
            {coins.map((coin, index) => (
              <li key={index}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AppCoinTracker;
