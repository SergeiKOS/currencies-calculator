import axios from "axios";

const url = "https://api.exchangeratesapi.io";

export const fetchUSDCADRate = async () => {
  let changeableUrl = `${url}/latest?base=USD&symbols=USD,CAD`;

  try {
    return await axios.get(changeableUrl);
  } catch (error) {
    console.log(error);
  }
};
