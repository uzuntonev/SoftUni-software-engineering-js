export function fetchData(x) {
    const url =`https://blog-apps-c12bf.firebaseio.com/${x}/.json`;
    return fetch(url)
        .then(res => {
            if(!res.ok) {
                throw new Error(`${res.status} - ${res.statusText}`);
            }
            return res;
        })
        .then(res => res.json());
}
