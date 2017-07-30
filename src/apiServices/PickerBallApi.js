import fetch from 'isomorphic-fetch';


// These are only available for my domains (including Github pages)
const ROOT_URL = 'https://pickerballapi.appspot.com/_ah/api/numbers/v1/';
const API_QUERY_KEY = '?key=AIzaSyD5pKid4o5FxY48VKNxzjrSySMHE1IUh0E';

const randomMethodUrl = `${ROOT_URL}random_picks${API_QUERY_KEY}`;
const gapMethodUrl = `${ROOT_URL}gap_picks${API_QUERY_KEY}`;

const winningNumsRequest = new Request(`${ROOT_URL}winnums${API_QUERY_KEY}`);

export const loadRandomPicks = (count) => {
	const requestBody = JSON.stringify({count});
	const request = new Request(randomMethodUrl, { method: 'POST', body: requestBody });
	return fetch(request);
}

export const loadGapPicks = (count) => {
	const requestBody = JSON.stringify({count});
	const request = new Request(gapMethodUrl, { method: 'POST', body: requestBody });
	return fetch(request);
}

export const loadWinNums = () => {
	return fetch(winningNumsRequest);
}
