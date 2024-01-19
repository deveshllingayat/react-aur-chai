import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);//for storing user entered amount
  const [from, setFrom] = useState("inr");//label for first currency
  const [to, setTo] = useState("usd");//label for second currency
  const [convertedAmount, setConvertedAmount] = useState(0);//for storing the conversion from first curr to seocnd curr
  const currencyInfo = useCurrencyInfo(from); //calling custom hook to fetch currency conversion data
  const options = Object.keys(currencyInfo);//storing all currency labels we received from currencyInfo
  //swap() function to toggle the two currencies in input boxes
  const swap = () => {
    //simply swaping values of setFrom() and setTo() and also swapping the converted amount and amount
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
//convert() will calculate conversion of one currency to another
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const BackgroundImage =
    "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full flex align-middle">
        <div className="w-full h-1/2 max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();//calculating conversion after use submits form
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}//users Input amount
                onAmountChange={(amount) => setAmount(amount)}//change amount if user changes input
                onCurrencyChange={(currency) => setFrom(currency)}//change currency label if user changes currency
                currencyOptions={options}//load all the currency options
                selectCurrency={from}//user selected currency
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} //toggle currency button
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}//store convertedAmount
                currencyOptions={options}//all currency labels
                onCurrencyChange={(currency) => setTo(currency)}//set user selected currency
                amountDisable//disable writing in input
                selectCurrency={to}//user selected currency
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
