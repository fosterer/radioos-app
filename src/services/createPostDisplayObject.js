
export default function createPostDisplayObject(firestoreMarkerItem) {
    const data = firestoreMarkerItem.data();
    const marker = {
        coordinates: [data.coordinates.latitude, data.coordinates.longitude],
        timestamp: data.timestamp,
        uId: data.uId
    };
    const post = {
        distance: firestoreMarkerItem.distance,
        distanceString: distanceFormatString(firestoreMarkerItem.distance),
        marker: marker,
        postid: firestoreMarkerItem.id,
        sortingFactor: getSortingFactor(firestoreMarkerItem.distance, data.timestamp),
        doc: null
    };

    return post;
}

function getSortingFactor(distance, timestamp) {
    return (precisionRound(distance, 0) + (1 - precisionRound(Number(("0." + getNumberForTime(timestamp))), 14)))
}

function getNumberForTime(time) {
    return time.seconds + time.nanoseconds;
}

function precisionRound(number, precision) {
    if (precision < 0) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }
    else {
        return + (Math.round(Number(number + "e+" + precision)) + "e-" + precision);
    }
}

function distanceFormatString(dist) {
    if (dist >= 1) {
        return precisionRound(dist, 0) + ' km';
    } else {
        let meters = precisionRound((dist * 1000), 0);
        if (meters < 30) {
            return 'nearby';
        } else {
            return precisionRound((dist * 1000), 0) + ' m.';
        }
    }
}