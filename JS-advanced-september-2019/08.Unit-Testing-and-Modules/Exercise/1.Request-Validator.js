function reqValidator(req) {
    const error = x => new Error(`Invalid request header: Invalid ${x}`);
    const { method, uri, version, message } = req;

    function methodValidator(method) {
        const validMethods = [ 'GET', 'POST', 'DELETE', 'CONNECT' ];
        if (method === undefined ||
             !validMethods.includes(method)) {
            throw error('Method');
        }
    }

    function uriValidator(uri) {
        if (uri === undefined ||
            (!uri.match(/^[\w\.\d]+$/g) ||
                uri === '')) {
            throw error('URI');
        }
    }

    function versionValidator(version) {
        const validVersion = [ 'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ];
        if (version === undefined || 
            !validVersion.includes(version)) {
            throw error('Version');
        }
    }

    function messageValidator(message) {
        if ((message === undefined) ||
            (!message.match(/[^<>\\&'"]/g) &&
                message !== '')) {
            throw error('Message');
        }
    }

    methodValidator(method);
    uriValidator(uri);
    versionValidator(version);
    messageValidator(message);
    return req;
}

console.log(reqValidator({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*',
}));

// 88/100 Judge !!!
