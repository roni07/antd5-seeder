const API_VERSION = 'api/1.0.0';

const {REACT_APP_BASE_URL, REACT_APP_IMAGE_URL} = process.env;

const API_URL = `${REACT_APP_BASE_URL}/${API_VERSION}`;
const SECURED_URL = `${API_URL}/secured`;

export const FILE_SERVER = REACT_APP_IMAGE_URL;

//auth
export const USER_SIGNIN_URL = `${API_URL}/users/login`;
export const USER_REFRESH_TOKEN = `${API_URL}/users/refresh-token`;

// profile
export const GET_USER_PROFILE = `${SECURED_URL}/users/profile`;
