const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', function(e){
  e.preventDefault();
  checkValidation([username, email, password, password2]);
});

function showError(input, message) {
  const fromControl = input.parentElement;
  fromControl.className = 'form-control error';
  const small = fromControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const fromControl = input.parentElement;
  fromControl.className = 'form-control success';
}

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
};

const checkLength = (input, min, max) => {
  if(input.value.length <= min) {
    showError(input, `${getValue(input.id)} should be greater than ${min}`);
  }
  else if(input.value.length > max) {
    showError(input, `${getValue(input.id)} should not be greater than ${max}`);
  }
  else {
    showSuccess(input);
  }
}

const checkValidation = (inuptArr) => {
  inuptArr.forEach(input => {
    if(input.value === '') {
      showError(input, `${getValue(input.id)} input valid`);
    } else if(input.value != '') {
      showError(checkLength(input, 3, 15));
    } else {
      showSuccess(input);
    }
  });
}

const getValue = (firstletter) => {
  return firstletter.charAt(0).toUpperCase() + firstletter.slice(1) ;
}