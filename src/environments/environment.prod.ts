export let baseUrl = {
  apiUrl: "http://13.233.24.154:8080/api/v1.0/tweets",
}

export const environment = {
  production: true,
  apiUrl: baseUrl.apiUrl,
  register: `${baseUrl.apiUrl}/register`,
  login: `${baseUrl.apiUrl}/login`,
  getAllTweet: `${baseUrl.apiUrl}/all`,
  postATweet: `${baseUrl.apiUrl}/`,
  getAllTweetOfUser: `${baseUrl.apiUrl}/`,
  deleteTweet: `${baseUrl.apiUrl}/`,
  regex: `${baseUrl.apiUrl}/user/search/`,
  forgotPassword: `${baseUrl.apiUrl}/`,
};
