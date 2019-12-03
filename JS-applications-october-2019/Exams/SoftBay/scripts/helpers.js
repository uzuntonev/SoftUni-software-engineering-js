
export function getSessionInfo(ctx) {
    ctx.authtoken = sessionStorage.getItem('authtoken');
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');
    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
    ctx.fullName = sessionStorage.getItem('fullName');
}

export function setSessionInfo(response) {
    sessionStorage.setItem('userId', response._id);
    sessionStorage.setItem('username', response.username);
    sessionStorage.setItem('authtoken', response._kmd.authtoken);
    sessionStorage.setItem('fullName', `${response.firstName} ${response.lastName}`);
}

export function loadAllPartials(ctx, partials) {
    const defaultPartials = {
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs',
    };

    for (const key in partials) {
        if (partials.hasOwnProperty(key)) {
            defaultPartials[key] = partials[key];
        }
    }
    return ctx.loadPartials(defaultPartials);
}
