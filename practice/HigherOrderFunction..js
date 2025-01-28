function applyOperation(array, operation){
    return array.map(operation);
}

function square(number){
    return number*number;
}

function double (number){
    return number*2;
}

const numbers= [1,2,3,4,5];

const squareedNummber=applyOperation(numbers,square);
console.log("Squared Numbers:",squareedNummber);

const doubledNumber=applyOperation(numbers, double);
console.log("Doubled Numbers:",doubledNumber);

