function validateSyntax() {

    let input = document.getElementById('petInput').value;

    // Validation logic goes here

    let result=''; // Placeholder for validation result

    // TODO: Write your validation logic here

    if(input === ''){
        document.getElementById('result').innerHTML = '';
        return;
    }

        // Check if input starts with 'pet' and followed by alphanumeric characters

        let pattern = /^pet_[0-9]{4}[A-Z][a-zA-Z]+$/;

    // Check if the input matches the pattern

    console.log(pattern.test(input))

        if(pattern.test(input)) {
            result = 'Valid Syntax <span class="valid"></span>';  // Set result message for valid input

        } else {
            result = 'Invalid Syntax <span class="invalid"></span>';  // Set result message for invalid input
        }



    // The code is to display the validation result
    document.getElementById('result').innerHTML = result;
}
