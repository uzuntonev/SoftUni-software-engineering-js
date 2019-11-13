import { fetchData } from './fetchData.js';

export async function getData(html) {
    const location = await getLocation(html);
    const today = await getForecast('forecast/today/', location.code);
    const upcoming = await getForecast('forecast/upcoming/', location.code);

    return {
        location,
        today,
        upcoming,
    };
}

async function getForecast(url, code) {
    return await fetchData(url + code);
}

async function getLocation(html) {
    const data = await fetchData('locations');
    return data
        .filter(x => x.name === html.location().value)[0];
}
