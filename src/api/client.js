import axios from "axios";

const client =  axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

client.interceptors.response.use(response => response.data);// axios puts the response into an object.this way we get the data from each ad

export default client;