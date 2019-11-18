const url = (id = '') => `https://fir-eb382.firebaseio.com/catches/${id}.json`;

function errorHandler(res) {
    if(!res.ok){
        throw new Error('Something went wrong !!');
    }
    return res;
}

export function get() {
    return fetch(url())
        .then(errorHandler)
        .then(res => res.json());
}

export function post(data) {
    const headers = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };
    return fetch(url(), headers)
        .then(errorHandler)
        .then(res => res.json());
}

export function put(data, id) {
    const headers = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };
    return fetch(url(id), headers)
        .then(errorHandler)
        .then(res => res.json());
}

export function del(id) {
    const headers = { method: 'DELETE' };
    return fetch(url(id), headers)
        .then(errorHandler);
}
