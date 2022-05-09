import axios from "axios";

// axios.defaults.baseURL = "https://example-app-name.com";
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export default axios;
