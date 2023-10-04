var getId = (id) => {
    return document.getElementById(id);
}

var getClasses = (classes) => {
    return document.getElementsByClassName(classes);
}

var firstName = getId('firstName'),
lastName = getId('lastName'),
email = getId('email'),
password = getId('password'),
form = getId('myform'),
button = getId('btn'),
sts = getId('sts'),
errMsg = getClasses('error');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    var fNameValid = custmValidator(firstName,0, 'First name is mandatory');
    var lNameValid = custmValidator(lastName,1, 'Last name is mandatory');
    var emailValid = custmValidator(email,2, 'Email name is mandatory');
    var passwordValid = custmValidator(password,3, 'Password name is mandatory');

    // console.log(fNameValid+" "+lNameValid+" "+emailValid+" "+passwordValid);
    if(fNameValid == true && lNameValid == true && emailValid == true && passwordValid == true){
        var finalObject = {};
        finalObject['firstName'] = firstName.value;
        finalObject['lastName'] = lastName.value;
        finalObject['email'] = email.value;
        finalObject['password'] = password.value;
        localStorage.setItem('userInfo', JSON.stringify(finalObject));
        sts.textContent = "Form Submitting Please Wait...";
        setTimeout(() => {
            sts.textContent = "Form Submitted Successfully.";
        }, 3000);
    }
})


function custmValidator(documentRef, classId, errorMessag) {
   if(documentRef.value.trim() == ''){
     documentRef.style.border = '2px solid red';
     errMsg[classId].textContent = errorMessag;
     return false;
   }
   else {
    documentRef.style.border = '2px solid green';
    errMsg[classId].textContent = '';
    return true;
   }
}