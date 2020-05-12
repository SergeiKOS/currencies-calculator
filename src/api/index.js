import axios from "axios";

const url = "https://api.exchangeratesapi.io";

export const fetchUSDCADRate = async () => {
  let changableUrl = `${url}/latest?base=USD&symbols=USD,CAD`;

  try {
    return await axios.get(changableUrl);
  } catch (error) {
    console.log(error);
  }
};
