function formValidation() {
  var fname = document.getElementById('fname');
  var lname = document.getElementById('lname');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var Rpassword = document.getElementById('Rpassword');
  var age = document.getElementById('age');
  var phoneNumber = document.getElementById('phoneNumber');
  var add = document.getElementById('add');
  var state = document.getElementById('state');
  //var country = document.getElementById('country');
  
  //var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  //var gender = document.querySelector('input[name="gender"]:checked');
  
  var hasError = false;
  
  function showError(element) {
    var errorSpan = document.createElement('span');
    errorSpan.textContent = 'POOR';
    errorSpan.className = 'error-message';
    errorSpan.style.paddingLeft="10px";
    errorSpan.style.color='red';
    element.parentNode.insertBefore(errorSpan, element.nextSibling);
    element.style.borderColor = 'red';
  }
  
  function clearError(element) {
    var error = element.parentNode.querySelector('.error-message');
    if (error) {
      element.parentNode.removeChild(error);
      element.style.borderColor = '';
    }
  }
  
  function validateCheckboxGroup(checkboxes) {
    var checked = Array.from(checkboxes).some(function (checkbox) {
      return checkbox.checked;
    });
    return checked;
  }
  
  clearError(fname);
  clearError(lname);
  clearError(email);
  clearError(password);
  clearError(Rpassword);
  clearError(age);
  clearError(phoneNumber);
  clearError(add);
  clearError(state);
  clearError(country);
  
  /*checkboxes.forEach(function (checkbox) {
    clearError(checkbox);
  });*/
  
  if (!fname.value.trim()) {
    showError(fname);
    hasError = true;
  }
  
  if (!lname.value.trim()) {
    showError(lname);
    hasError = true;
  }
  
  if (!email.value.trim()) {
    showError(email);
    hasError = true;
  }
  
  if (!password.value.trim()) {
    showError(password);
    hasError = true;
  }
  
  if (!Rpassword.value.trim()) {
    showError(Rpassword);
    hasError = true;
  }
  if (!age.value.trim()) {
    showError(age);
    hasError = true;
  }
  if (!phoneNumber.value.trim()) {
    showError(phoneNumber);
    hasError = true;
  }
  
  if (!add.value.trim()) {
    showError(add);
    hasError = true;
  }
  
  if (!state.value.trim()) {
    showError(state);
    hasError = true;
  }
  
  /*if (country.value === 'choose your country') {
    showError(country);
    hasError = true;
  }
  
  /*if (!gender) {
    showError(document.querySelector('input[name="gender"]'));
    hasError = true;
  }
  
 /* if (!validateCheckboxGroup(checkboxes)) {
    checkboxes.forEach(function (checkbox) {
      showError(checkbox.nextElementSibling);
    });
    hasError = true;
  }*/
  
  if (hasError) {
    return false;
  }
  
  return true;
}
