var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is Required!";
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name!";
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone Number is Required!";
        return false;
    }

    if (!phone.match(/^[\d\s-()]{10}$/)) {
        phoneError.innerHTML = "Phone number should only have digits!";
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is Required!";
        return false;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
        emailError.innerHTML = "Email is not Valid";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 30;

    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters requried!';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if (!validateEmail() || !validatePhone() || !validateMessage() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix form error";
        setTimeout(() => { submitError.style.display = 'none'; }, 3000);
        return false;
    }

}