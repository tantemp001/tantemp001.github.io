import axios from "axios";

const TIME_OUT = 1000;

export async function getAllWords() {
  const url =  "https://raw.githubusercontent.com/tantemp001/dvc-dump001/refs/heads/main/aasd21283787dsdahd8789eqwj.json";
  let x = await axios.get(url);
  return x.data;
}
