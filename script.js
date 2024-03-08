const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', function() {
    const inputValue = textInput.value.trim(); // Trim whitespace from the input value
    if (inputValue === '') {
        alert('Please input a value');
    } else {
     const inputValue = textInput.value.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').trim().toLowerCase(); // Trim whitespace and convert to lowercase
    const reversedValue = inputValue.split('').reverse().join(''); // Reverse the input value
    if (inputValue === reversedValue) {
        resultDiv.textContent = `${textInput.value} is a palindrome`;
    } else {
        resultDiv.textContent = `${textInput.value} is not a palindrome`;
    }
    }
});
