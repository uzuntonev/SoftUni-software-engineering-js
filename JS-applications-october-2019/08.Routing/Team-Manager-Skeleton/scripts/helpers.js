export function passwordCheck(password, rePassword) {
    if (password !== rePassword) {
        alert('Your password and confirmation password do not match.');
        return false;
    }
    if (password === '' || rePassword === '') {
        alert('Password must be filled out');
        return false;
    }
    return true;
}

export function userCheck(user){

}

export function getSessionInfo(ctx) {
    for (const key in sessionStorage) {
        if (sessionStorage.hasOwnProperty(key)) {
            ctx[key] = sessionStorage[key];
        }
    }
}

export function loadAllPartials(partials) {
    const defaultPartials = {
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs',
    };

    for (const key in partials) {
        if (partials.hasOwnProperty(key)) {
            defaultPartials[key] = partials[key];
        }
    }
    return defaultPartials;
}
