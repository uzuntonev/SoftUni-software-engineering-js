const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_S1iMma6cr'; //'kid_BJ_Ke8hZg'; 
const appSecret = 'e232861370fd4a98a7bbf69fdd70a56c';

const username = 'admin';
const password = 'admin';

function makeAuth(type) {
    return type === 'Basic'
        ? 'Basic ' + btoa(`${appKey}:${appSecret}`)
        : 'Kinvey ' + sessionStorage.getItem('authtoken');
}

function makeHeaders(method, data, type) {
    const headers = {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
    };

    if(method === 'POST' || method === 'PUT'){
        headers.body = JSON.stringify(data);
    }

    return headers;
}

function fetchData(module, endpoint, headers) {
    return fetch(`${baseUrl}/${module}/${appKey}/${endpoint}`, headers)
        .then(res => res.json());
}
export function get(module, endpoint, type) {
    const headers = makeHeaders('GET', type);
    return fetchData(module, endpoint, headers);
}

export function post(module, endpoint, data, type) {
    const headers = makeHeaders('POST', data, type);
    return fetchData(module, endpoint, headers);
}

export function put(module, endpoint, data, type) {
    const headers = makeHeaders('PUT', data, type);
    return fetchData(module, endpoint, headers);
}
    
export function del(module, endpoint, type) {
    const headers = makeHeaders('DELETE', type);
    return fetchData(module, endpoint, headers);
}


