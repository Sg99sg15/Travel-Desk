console.log("this is project 4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#success').hide();
$('#failure').hide();



name.addEventListener('blur', () => {
    console.log("name is blur");

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your username is Valid');
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        validUser = true;
    } else {
        console.log('Your username is not Valid');
        name.classList.add('is-invalid');
        validUser = false;

    }
});

email.addEventListener('blur', () => {
    console.log("email is blur");

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is Valid');
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validEmail = true;

    } else {
        console.log('Your email is not Valid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
});

phone.addEventListener('blur', () => {
    console.log("phone is blur");


    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is Valid');
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validPhone = true;

    } else {
        console.log('Your phone is not Valid');
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        validPhone = false;

    }
});



let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validPhone, validUser);


    // Submit your form here
    if (validEmail && validUser && validPhone) {

        let failure = document.getElementById('failure');

        console.log("Phone, Email, User are valid. Submitting the form");
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
    } else {
        console.log("One of Phone, email or user are not valid. Hence not submitting the from. Please correct the errors and try again");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }


});