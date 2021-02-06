import timeoutPromise from "./timeoutPromise";

export default async function getLocationFromNavigator() {
    const getLocation = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            pos => resolve([pos.coords.latitude, pos.coords.longitude]),
            err => reject(err)
        );
    });

    return Promise.race([getLocation, timeoutPromise()]);
}