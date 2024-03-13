function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result  

    // TODO: Write your validation logic here
    if (/^pet_[a-zA-Z0-9]+$/.test(input)) { 5
        result ='Valid Syntax';
    } else {
        result ='Invalid Syntax'
    }

        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


