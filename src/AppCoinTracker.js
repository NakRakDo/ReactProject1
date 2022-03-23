import { useEffect, useState } from "react";

function AppCoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [coins]);

  const onChangeSelect = (event) => {
    setSelected((prev) => {
      return 20 / event.target.value;
    });
  };

  //To Do : 화폐 변수 입력받기
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
            type="text"
            placeholder="Select coin to be Converted..."
            value={selected}
            readOnly
          ></input>
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
