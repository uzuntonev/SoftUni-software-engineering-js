import { getData } from './getData.js';
import { forecastTodayBuildHTML, forecastUpcomingBuildHTML, clearHTML } from './views.js';

const html = {
    mainDiv: () => document.querySelector('#forecast'),
    location: () => document.querySelector('#location'),
    btnSubmit: () => document.querySelector('#submit'),
    currentForecast: () => document.querySelector('#current'),
    upcomingForecast: () => document.querySelector('#upcoming'),
    headersDiv: () => document.querySelectorAll('.label'),
};

const symbols = {
    Sunny: '☀',
    'Partly sunny': '⛅',
    Overcast: '☁',
    Rain: '☂',
    degrees: '°',
};

async function getWeatherInfo() {
    clearHTML(html);
    let data;
    try {
        data = await getData(html);
    } catch (err) {
        alert('Location is not found!');
        throw new Error('Location is not found!');
    }
    forecastTodayBuildHTML(data.today, html, symbols);
    forecastUpcomingBuildHTML(data.upcoming, html, symbols);
    html.mainDiv().style.display = 'block';
}

html.btnSubmit().addEventListener('click', getWeatherInfo);
