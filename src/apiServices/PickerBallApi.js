import fetch from 'isomorphic-fetch';

// TODO: remove prior to GitHub
const apiUrl = 'https://pickerballapi.appspot.com/_ah/api/numbers/v1/';
const apiQueryKey = '?key=AIzaSyD5pKid4o5FxY48VKNxzjrSySMHE1IUh0E';

const randomMethodUrl = apiUrl + 'random_picks' + apiQueryKey;
const gapMethodUrl = apiUrl + 'gap_picks' + apiQueryKey;

const winningNumsRequest = new Request(apiUrl + 'winnums' + apiQueryKey);

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
