import { useEffect, useState } from "react";

//here we are creating a custom hook which will return data from api call for the currency passed and its conversion rates
function useCurrencyInfo(currency){
    const [data, setData] = useState({});//passing empty obj to ensure website dont crash if data is null
    //now we can do fetch call without useEffect too but we have to only call api when there is changes in currency or when the component is mount or unmount
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]));
    },[currency]);
    return data;//we are returning the data only and we are exporting whole function
}
export default useCurrencyInfo;