//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
    document.getElementById('input').value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    let input = document.getElementById('input');
    if (operator == 'Del') {
        // TODO: answer here
        let del = input.value.slice(0, -1);
        input.value = del;
    } else if (operator == 'AC') {
        // TODO: answer here
        input.value = '';
    } else {
        // TODO: answer here
        input.value += operator;
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    let input = document.getElementById('input');
    if (input.value.length > 0) {
        input.value = eval(input.value);
        // method eval() digunakan untuk evaluate atau mengeksekusi string yang diberikan.
        // dalam hal ini digunakan untuk menghitung nilai dari string yang telah diinputkan.
    } else {
        input.value = '0';
    }
    
}