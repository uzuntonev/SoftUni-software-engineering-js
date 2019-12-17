export function displayError(message) {
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').fadeOut(),
    });
    // const ref = document.querySelector('#notifications');
    // const popup = document.querySelector('#errorNotification');
    // new Popper(ref, popup, { placement: 'top' });

    const errorBox = document.getElementById('errorBox');
    errorBox.textContent = message;
    errorBox.style.display = 'block';
    setTimeout(() => {
        errorBox.style.display = 'none';
    }, 3000);
}

export function displaySuccess(message) {
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').fadeOut(),
    });

    // const ref = document.querySelector('#notifications');
    // const popup = document.querySelector('#successNotification');
    // new Popper(ref, popup, { placement: 'top' });

    const successBox = document.getElementById('successBox');
    successBox.textContent = message;
    successBox.style.display = 'block';
    setTimeout(() => {
        successBox.style.display = 'none';
    }, 3000);
}

export function validateRegisterForm(user, pass, rePass) {
    if (user.trim() === '' || pass.trim() === '' || rePass.trim() === '') {
        displayError('All fields must be field!');
        return false;
    }

    if (pass !== rePass) {
        displayError('Your password and confirmation password do not match.');
        return false;
    }

    if (user.length < 3) {
        displayError('The username should be at least 3 characters long');
        return false;
    }

    if (pass.length < 6) {
        displayError('The password should be at least 6 characters long');
        return false;
    }
    return true;
}
