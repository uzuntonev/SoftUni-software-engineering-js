export function fetchData(x) {
    const url = `https://judgetests.firebaseio.com/${x}.json`;
    return fetch(url)
        .then(res => {
            if(!res.ok) {
                throw new Error(`${res.status} - ${res.statusText}`);
            }
            return res;
        })
        .then(res => res.json());
}
