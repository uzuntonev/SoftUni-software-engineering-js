export function displayError(message) {
    $(document).on({
        ajaxStart: () => $('#loadingNotification').show(),
        ajaxStop: () => $('#loadingNotification').fadeOut(),
    });
    const ref = document.querySelector('#notifications');
    const popup = document.querySelector('#errorNotification');
    const popper = new Popper(ref, popup, { placement: 'top' });

    const errorBox = document.getElementById('errorNotification');
    errorBox.textContent = message;
    errorBox.style.display = 'block';
    setTimeout(() => {
        errorBox.style.display = 'none';
    }, 3000);
}

export function displaySuccess(message) {
    $(document).on({
        ajaxStart: () => $('#loadingNotification').show(),
        ajaxStop: () => $('#loadingNotification').fadeOut(),
    });

    const ref = document.querySelector('#notifications');
    const popup = document.querySelector('#successNotification');
    const popper = new Popper(ref, popup, { placement: 'top' });

    const successBox = document.getElementById('successNotification');
    successBox.textContent = message;
    successBox.style.display = 'block';
    setTimeout(() => {
        successBox.style.display = 'none';
    }, 2500);
}

export function validateRegisterForm(user, pass, rePass) {
    if (user.trim() === '' || pass.trim() === '' || rePass.trim() === '') {
        displayError('All fields must be filed!');
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

