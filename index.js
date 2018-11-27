function ValidateForm(){

 var validUsername = false;

 var validUserPassword = false;

 var validFirstName = false; 

 var validPhone =false; 

 var validLastName = false; 

 var validEmail = false;

 var validAddress = false;

 var validCity = false; 

 var validZipCode = false; 

  

  

 var letters = /^[A-Za-z]+$/; 

 var numbers =/^[0-9]+$/; 

 





  

 var errorMessages ="";  // All the error messages are going to stay in this variable

 /*********** VALIDATES USERNAME ******** */

 //Required field

//This syntax is using name-of-form.name-of-field.value

// You can also use document.getElementById("id-of-field").value



/*********** VALIDATES USERNAME ******** */

 if (myContact.username.value.length > 12 || myContact.username.value===null || myContact.username.value==="" )

    errorMessages += "<p>The username must be less than 12 characters and it is required</p>";

 

 else 



   validUsername =true;

  

// console.log(validUsername);  

  

  

  

  

  

  

  

 /*********** VALIDATES PASSWORD ******** */

 if (myContact.password.value==null ||

 myContact.password.value=== "" ||

 myContact.password.value.length >7)

 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";

 else

 validUserPassword = true; 

  

  

   /*********** VALIDATES FIRSTNAME ******** */

 if (myContact.firstname.value==null ||

 myContact.firstname.value=== "" ||

 myContact.firstname.value.length >20 || !myContact.firstname.value.match(letters))

 errorMessages += "<p>The firstname must be less than 20 characters and it is required. Only Letterrs and Numbers accepted</p>";

 else

 validFirstName = true; 

  

  

  

   /*********** VALIDATE PHONENUMBER ******** */

 if (myContact.phone.value==null ||

 myContact.phone.value=== "" ||

 myContact.phone.value.length >15 || !myContact.phone.value.match(numbers))

 errorMessages += "<p>The Phone number must be less than 15 characters and it is required. Only Numbers accepted</p>";

 else

 validPhone = true; 

  

  

   /*********** VALIDATES LASTTNAME ******** */

 if (myContact.lastname.value==null ||

 myContact.lastname.value=== "" ||

 myContact.lastname.value.length >50 || !myContact.lastname.value.match(letters))

 errorMessages += "<p>The last name must be less than 50 characters and it is required. Only Letterrs and Numbers accepted</p>";

 else

 validLastName = true; 

  

  

    /*********** VALIDATES EMAIL ******** */

 if (myContact.email.value==null ||

 myContact.email.value=== "" ||

 myContact.email.value.length >1000000 || !myContact.email.value.match(letters))

 errorMessages += "<p>The email is required.</p>";

 else

 validLastName = true; 

  

    /*********** VALIDATES ADRESS ******** */

 if (myContact.address.value==null ||

 myContact.address.value=== "" ||

 myContact.address.value.length >1000000 || !myContact.address.value.match(letters))

 errorMessages += "<p>The address is required.</p>";

 else

 validAddress = true; 

  

   /*********** VALIDATES CITY ******** */

 if (myContact.city.value==null ||

 myContact.city.value=== "" ||

 myContact.city.value.length >50 || !myContact.city.value.match(letters))

 errorMessages += "<p>The City is required.</p>";

 else

 validCity = true; 

  

 /*********** ZipCode ******** */

 if (myContact.zipcode.value==null ||

  myContact.zipcode.value=== "" ||

 myContact.zipcode.value.length >6 || !myContact.zipcode.value.match(numbers))

 errorMessages += "<p>The zipcode must be Max of 5 characters and it is required. Only Numbers accepted</p>";

 else

 validZipCode = true;   

  

  

  

 document.getElementById("errorMessages").innerHTML = errorMessages;

// Make sure you return all the boolean variables that are checking each field

 return (validUsername && validUserPassword && validFirstName && validPhone && validLastName && validEmail && validAddress && validCity && validZipCode) ;

}
