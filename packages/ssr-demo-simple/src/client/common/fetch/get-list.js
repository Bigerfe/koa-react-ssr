import axios from 'axios';
import fetchConfig from './fetch-config';

export default ()=>{
    return axios.get(`${fetchConfig.apiHost}/list`)
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}