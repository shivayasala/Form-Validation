let Name = document.getElementById('name');
let Phone = document.getElementById('phone');
let Email = document.getElementById('email');
let Message = document.getElementById('message');

function validateName() {
    let text = document.getElementById("text").value;
    if (text.length === 0) {
        Name.innerHTML = "Please enter the name";
        return false;
    } else {
        let rule = /^[a-zA-Z\s]{1,}$/; 
        if (rule.test(text)) {
            Name.innerHTML = "";
            return true;
        } else {
            Name.innerHTML = "Please enter a valid name";
            return false;
        }
    }
}

function validatePhone() {
    let num = document.getElementById("mob").value;
    if (/^\d{10}$/.test(num)) {
        Phone.innerHTML = "";
        return true;
    } else {
        Phone.innerHTML = "Please enter a valid phone number";
        return false;
    }
}

function validateEmail() {
    let em = document.getElementById('ema').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(em)) {
        Email.innerHTML = "";
        return true;
    } else {
        Email.innerHTML = "Please enter a valid email address";
        return false;
    }
}

function validateMessage() {
    let mes = document.getElementById('mess').value;
    if (mes.length === 0) {
        Message.innerHTML = "Please enter a message";
        return false;
    } else {
        Message.innerHTML = "";
        return true;
    }
}

document.getElementById("text").addEventListener("input", validateName);
document.getElementById("mob").addEventListener("input", validatePhone);
document.getElementById('ema').addEventListener("input", validateEmail);
document.getElementById('mess').addEventListener("input", validateMessage);

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let nameValid = validateName();
    let phoneValid = validatePhone();
    let emailValid = validateEmail();
    let messageValid = validateMessage();

    if (nameValid && phoneValid && emailValid && messageValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fill out all fields correctly.");
    }
});
