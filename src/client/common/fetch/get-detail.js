import axios from 'axios';
import fetchConfig from './fetch-config';


export default (id)=>{
    return axios.get(`${fetchConfig.apiHost}/detail/${id}`)
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}