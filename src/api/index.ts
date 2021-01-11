import axios from "axios";

const url = "https://api.exchangeratesapi.io";

export const fetchRates = async (base: string) => {
  let allRates = ["AUD", "CAD", "EUR", "GBP", "JPY", "RUB", "USD"];
  let rates = allRates.filter((rate) => rate !== base).join();
  let changeableUrl = `${url}/latest?base=${base}&symbols=${rates}`;

  try {
    return await axios.get(changeableUrl);
  } catch (error) {
    console.log(error);
  }
};
