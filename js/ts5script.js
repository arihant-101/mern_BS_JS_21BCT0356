function formValidation() {
    var name = document.registration.username;
    var email = document.registration.email;
    var url = document.registration.site;
    var message = document.registration.msg;

    // Clear any previous error messages and borders
    clearErrors();

    // Create an array to store validation error messages
    var errors = [];

    // Name validation
    if (name.value.trim() === "") {
        errors.push("   This field is required");
        name.style.border = "3px solid #f00";
    }

    // Email validation
    var emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailPattern.test(email.value) || email.value.trim() === "") {
        errors.push("A valid email address is required");
        email.style.border = "3px solid #f00";
    }

    // URL validation (You can add more specific URL validation if needed)
    if (url.value.trim() === "") {
        errors.push("A valid URL is required");
        url.style.border = "3px solid #f00";
    }

    // Message validation
    if (message.value.trim() === "") {
        errors.push("This field is required");
        message.style.border = "3px solid #f00";
    }

    // Display all accumulated error messages
    if (errors.length > 0) {
        displayErrors(errors);
        return false;
    }

    // If all checks pass, the form is considered valid
    return true;
}

// Helper function to display error messages
function displayErrors(errors) {
    var errorContainer = document.getElementById("error-container");
    var errorList = document.createElement("ul");

    
        document.getElementById("m1").innerHTML=errors[0];
        document.getElementById("m2").innerHTML=errors[1];
        document.getElementById("m3").innerHTML=errors[2];
        document.getElementById("m4").innerHTML=errors[3];
    

    errorContainer.innerHTML = "";
    errorContainer.appendChild(errorList);
}

// Helper function to clear errors and borders
function clearErrors() {
    var formElements = document.querySelectorAll("input, textarea");
    formElements.forEach(function (element) {
        element.style.border = "1px solid transparent";
    });

    var errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = "";
}
