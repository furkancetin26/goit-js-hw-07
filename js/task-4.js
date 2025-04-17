const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const { email, password } = loginForm.elements;
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('All form fields must be filled in');
        return; // işlem burada biter
      }
      const data = {
        email: email.value.trim(),
        password: password.value.trim(),
      };
    console.log(data)
    loginForm.reset();
})