export function forecastTodayBuildHTML(data, html, symbols) {
    const spanWetherSymbol = createElement.bind(undefined, 'span');
    const spanLocation = createElement.bind(undefined, 'span', 'forecast-data');
    const spanDegrees = createElement.bind(undefined, 'span', 'forecast-data');
    const spanWetherCondition = createElement.bind(undefined, 'span', 'forecast-data');

    const { condition, low, high } = data.forecast;
    const parentSpan = createElement('span', 'condition');
    parentSpan.appendChild(spanLocation(data.name));
    parentSpan.appendChild(spanDegrees(`${low}${symbols.degrees}\\${high}${symbols.degrees}`));
    parentSpan.appendChild(spanWetherCondition(condition));

    html.currentForecast().appendChild(spanWetherSymbol('condition symbol', symbols[condition]));
    html.currentForecast().appendChild(parentSpan);
}

export function forecastUpcomingBuildHTML(data, html, symbols) {
    data.forecast.forEach(day => {
        html.upcomingForecast().appendChild(buildParentSpan(day, symbols));
    });
}

export function clearHTML(html) {
    const todayHeader = html.headersDiv()[0].outerHTML;
    const upcomingHeader = html.headersDiv()[1].outerHTML;
    html.currentForecast().innerHTML = todayHeader;
    html.upcomingForecast().innerHTML = upcomingHeader;
}

function buildParentSpan(data, symbols) {
    const { condition, low, high } = data;
    const parentSpan = createElement('span', 'upcoming');
    parentSpan.appendChild(createElement('span', 'symbol', symbols[condition]));
    parentSpan.appendChild(createElement('span', 'forecast-data', `${low}${symbols.degrees}\\${high}${symbols.degrees}`));
    parentSpan.appendChild(createElement('span', 'forecast-data', condition));
    return parentSpan;
}

function createElement(tag, className, content) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = content;
    return element;
}


