import * as Sentry from '@sentry/browser';

const isProd = process.env.NODE_ENV && process.env.NODE_ENV === "production";

//TODO: implement custom log service with firebase function to capture these (warn and error only?) logs
export default function logMessage(place, entry, level = 'info', stateData = '') {
    if (!isProd) console.log(level, place, entry, stateData);

    if (isProd) {
        if (level.toLowerCase() !== 'info') {
            Sentry.captureException(
                { place: place, entry: entry, statData: stateData }
            );
        }
    }
}