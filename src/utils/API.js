// Hint: you can copy the URL to a browser and see the result
const FETCH_CANDIDATES_URL =
  "https://randomuser.me/api/?seed=abcd&nat=us,dk,fr,gb&results=50&page=1";


// asynchronous function that fetches the data from the URL, and rturns it json formatted
export const fetchCandidates = async () => {
  // Add your implementation of candidates data fetching here, use the URL provided above
  
  return fetch(FETCH_CANDIDATES_URL)
    .then((res) => {
      return res.json();
  })




}
