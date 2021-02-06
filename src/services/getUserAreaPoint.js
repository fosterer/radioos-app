//https://medium.com/mop-developers/free-ip-based-geolocation-with-google-cloud-functions-f92e20d47651
import axios from 'axios';
import appConfig from '../config/appConfig.json';

//TODO: make url depend on config, calling specific geolocate instance
//TODO: secure prod function with cors whitelist as described in the article
export default async function getUserAreaPoint() {
    const pid = appConfig.firebase.projectId;
    const url = 'https://us-central1-' + pid + '.cloudfunctions.net/geolocate';

    const result = await axios.get(url);

    return result.data;
}