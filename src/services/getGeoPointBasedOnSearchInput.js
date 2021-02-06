import axios from 'axios';
import logMessage from './logMessage';

export default async function getGeoPointBasedOnSearchInput(placeDirtyString, userAreaPoint) {
    const placePoint = await geocodePlace(placeDirtyString, userAreaPoint);
    return placePoint;
}

async function geocodePlace(placeString, centerPoint) {
    const url = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&outFields=LongLabel&maxLocations=1&location='
        + centerPoint + '&SingleLine=' + encodeURI(placeString);
    try {
        const result = await axios.get(url);
        const placePoint = result.data.candidates[0].location;

        //TODO: strip this logMessage *and* 'LongLabel' attribute from result after testing completed
        logMessage('geocodePlace() found:', result.data.candidates[0].attributes.LongLabel);

        return [placePoint.y, placePoint.x];
    } catch (error) {
        throw new Error(error);
    }

}

//https://developers.arcgis.com/rest/geocode/api-reference/geocoding-free-vs-paid.htm
//https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm