const TIME_OUT = 1000;

export async function getAllWords() {
  const url =  "https://raw.githubusercontent.com/tantemp001/dvc-dump001/refs/heads/main/aasd21283787dsdahd8789eqwj.json";
  const x = await fetch(url, { signal: AbortSignal.timeout(TIME_OUT) });
  return x.json();
}

// export async function getAllVerbs() {
//   const url =  "https://raw.githubusercontent.com/tantemp001/dvc-dump001/refs/heads/main/asdqweqwkjhhcqwhajksdjka.json";
//   const x = await axios.get(url, {timeout: TIME_OUT});
//   return x.data;
// }

export async function getAllQuestions() {
  const url =  "https://raw.githubusercontent.com/tantemp001/dvc-dump001/refs/heads/main/bcfde12deasdq3asdjkadkuqjd1.json";
  const x = await fetch(url, { signal: AbortSignal.timeout(TIME_OUT) });
  return x.json();
}