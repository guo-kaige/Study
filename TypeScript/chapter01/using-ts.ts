const button = document.querySelector('button')!;
const number1Element = document.getElementById('num1')! as HTMLInputElement;
const number2Element = document.getElementById('num2')! as HTMLInputElement;

function addFunc(num1: number, num2: number): number {
    const sum = num1 + num2;
    return sum;
}

button.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(addFunc(+number1Element.value, +number2Element.value))
})