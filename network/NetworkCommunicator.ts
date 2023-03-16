import axios from "axios";

// CORE/PRIVATE: helper functions here shouldn't be exported and/or called outside of this file

const baseURL = `${process.env.API_URL}`;

const createHeaders = (authToken?: string) => ({
	'Content-Type': 'application/json',
	'Accept': 'application/json',
	...(!!authToken && { 'authToken': authToken })
});

const makeURL = (endpoint: string) => `${baseURL}/${endpoint}`;

const doGet = async (endpoint: string, authToken?: string, params?: object) =>
	axios.get(makeURL(endpoint), { headers: createHeaders(authToken), params });

const doPost = async (endpoint: string, body?: object, authToken?: string) =>
	axios.post(makeURL(endpoint), body, { headers: createHeaders(authToken) });

const doDelete = async (endpoint: string, authToken?: string) =>
	axios.delete(makeURL(endpoint), { headers: createHeaders(authToken) });

const doPatch = async (endpoint: string, body?: object, authToken?: string) =>
	axios.patch(makeURL(endpoint), body, { headers: createHeaders(authToken) });

// PUBLIC: these are the methods that should be used in components/views

export namespace NetworkCommunicator {

	// STABLE: METHODS HERE ARE LIKELY SAFE & RELIABLE

	export const registerUser = async (user: object) =>
		doPost('user/register', user);

	export const loginUser = async (username: string, password: string) =>
		doPost('user/login', { username, password });

	export const logoutUser = async (authToken: string) =>
		doDelete('user/login', authToken);

	export const getOwnProfile = async(authToken: string) =>
		doGet('user/me', authToken);

	export const editOwnProfile = async(authToken: string, newData: object) =>
		doPatch('user/me', newData, authToken);

	export const getOtherProfile = async (authToken: string, username: string) =>
		doGet(`user/${username}`, authToken);

	export const followUser = async (authToken: string, username: string) =>
		doPost(`user/followers/${username}`, undefined, authToken);

	export const unfollowUser = async (authToken: string, username: string) =>
		doDelete(`user/followers/${username}`, authToken);

	// EXPERIMENTAL: METHODS & ENDPOINTS BELOW HERE ARE LIKELY STILL BUGGY

	export const getFollowers = async (authToken: string, username: string, startIndex: string) =>
		doGet(`user/followers/${username}`, authToken, { s: startIndex });

	export const getFollowing = async (authToken: string, username: string, startIndex: string) =>
		doGet(`user/following/${username}`, authToken, { s: startIndex });

	export const postReview = async (authToken: string, review: object) =>
		doPost('review', review, authToken);

	export const editReview = async (authToken: string, reviewId: string, newData: object) =>
		doPatch(`review/${reviewId}`, newData, authToken);

	// UNFINISHED: METHODS & ENDPOINTS BELOW HERE ARE LIKELY NON-FUNCTIONAL
}