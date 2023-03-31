document.querySelector('#email').addEventListener('blur', validateEmail);

document.querySelector('#message').addEventListener('blur', validateMessage);

document.querySelector('#subject').addEventListener('blur', validateSubject);

document.querySelector('#username').addEventListener('blur', validateUsername);





const reSpaces = /^\S*$/;


function validateUsername(e) {
  const username = document.querySelector('#username');
  if (!reSpaces.test(username.value)|| username.value.trim()==="") {
    username.classList.remove('is-valid');
    username.classList.add('is-invalid');
    return true;
  } else {
    username.classList.remove('is-invalid');
    username.classList.add('is-valid');
    return false;
  }
}

function validateEmail(e) {
  const email = document.querySelector('#email');
  const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

  if (reSpaces.test(email.value) && re.test(email.value)) {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');

    return true;
  } else {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');

    return false;
  }
}

function validateSubject(){
    const subject=document.getElementById("subject");
    if(subject.value.trim() === ""){
        subject.classList.add('is-invalid');
        subject.classList.remove('is-valid');
        return false;
    }else{
        subject.classList.remove('is-invalid');
        subject.classList.add('is-valid');
        return true;
    }
}
function validateMessage(){
    const message=document.getElementById("message");
    if(message.value.trim() === ""){
        message.classList.add('is-invalid');
        message.classList.remove('is-valid');   
       return false;
    }else{
        message.classList.remove('is-invalid');
        message.classList.add('is-valid');
        return true;
    }
}
(function () {
  const forms = document.querySelectorAll('.needs-validation');

  for (let form of forms) {
    form.addEventListener(
      'submit',
      function (event) {
        
        if (
          !form.checkValidity() ||
          !validateEmail() ||
          !validateUsername() ||
          !validateSubject()||
          !validateMessage()
        ) {
          event.preventDefault();
          event.stopPropagation();

        } else {
          form.classList.add('was-validated');
        }
        const username = document.querySelector('#username');
        const email = document.querySelector('#email');
        const subject=document.getElementById("subject");
        const message=document.getElementById("message");
        
        if(username.value.trim() === "" || email.value.trim() === "" || subject.value.trim() === "" || message.value.trim() === ""){
          alert("Please fill all fields");
        }else{
          alert("Your message has been sent. Thank you!");
        }
        
      },
      false
    );
  }
})();