import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users?q';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    const query = `q=${username}+location:${location}+repos:>${minRepos}`;
    const response = await axios.get(`${GITHUB_API_URL}/search/users?${query}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user data:', error);
    throw error;
  }
};

export { fetchUserData, fetchAdvancedUserData };




