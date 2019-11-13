export function cacheData(func) {
    const db = new Map();
    return function () {
        const key = JSON.stringify(arguments);
        if(!db.has(key)){
            db.set(key, func(...arguments));
        }
        return db.get(key);
    };
}
