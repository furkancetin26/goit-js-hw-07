const input = document.querySelector('#name-input');

input.addEventListener('input', function(e){
    const name = document.querySelector('#name-output');
    input.value.trim();
    if(input.value == ''){
        name.textContent = "Anonymous"
    }
    else{
        name.textContent = e.target.value;
    }
    
})