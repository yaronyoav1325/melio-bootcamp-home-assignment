import {fetchCandidates} from "./API.js";

// returns the candidates object saved in the local storage of the browser
export const getPersistentCandidatesData = () => {
  // Add your implementation of getting the candidates data
  const data =  JSON.parse(localStorage.getItem('candidates'));
  return data;
}

// saves the candidates object in the local storage of the browser
export const setPersistentCandidatesData = (candidates) => {
  // Add your implementation of saving the candidates data
  localStorage.setItem("candidates",JSON.stringify(candidates));
}

// rearranges the data as instructed in task 1.2
export const transformCandidatesData = (data) => {
  // Add your implementation of transforming the fetched candidates data
    
  // empty object to be filled
  const allCandidates={};
  const englishSpeakingCountries = ['United States','United Kingdom'];
  // apply manipulateCandidate on each of the candidates data
  data.results.forEach((person) => manipulateCandidate(person,allCandidates,englishSpeakingCountries));
  return allCandidates;
}

// manipulating candidates data structure according to task 1
const manipulateCandidate = (person,allCandidates,englishSpeakingCountries) => {
  const candidate = {
    firstName:person.name.first,
		lastName:person.name.last,
		email:person.email,
		city:person.location.city,
		country:person.location.country,
		picture:person.picture,
		uuid:person.login.uuid,
		isFavorite: null,
		isPreferred:(englishSpeakingCountries.includes(person.location.country)) ? true:false
  };
  const firstLetter = person.name.first.charAt(0).toUpperCase();
  if (allCandidates[firstLetter] == null){
    allCandidates[firstLetter] = [];
  }
  allCandidates[firstLetter].push(candidate);
}