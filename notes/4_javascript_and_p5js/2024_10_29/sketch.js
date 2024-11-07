function setup() {
    createCanvas(500, 500);
    truthyAndFalsy();

    forIn();
    forOf();

    weirdFunctionCalls();
    typeCheckFunctionCalls();

    objectExample();
}

function draw() {
    background(0, 100, 200);
}

function sum(x, y) {
    return x + y;
}

function truthyAndFalsy() {
    let func = sum;

    if (func) {
        console.log('func is truthy');
    } else {
        console.log('func is falsy');
    }

    let value = 2;

    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }

    value = undefined;

    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }

    value = 0;

    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
}

function forIn() {
    let numbers = [3, 4, 6, 9];
    let indices = '';

    for (index in numbers) {
        indices += index + ' ';
    }

    console.log('\nfor...in');
    console.log(indices);

    // for-in loop looping through the keys not the values 
    let myObject = {'name': 'Bill', 'age': 46};
    let keys = '';
    let values = '';

    for (const key in myObject) {
        keys += key + ' ';
        values += myObject[key] + ' ';
    }

    console.log(`keys: ${keys}`);
    console.log(`values: ${values}`);
}

function forOf() {
    let numbers = [3, 4, 6, 9];
    let indices = '';

    for (const index of numbers) {
        indices += index + ' ';
    }

    console.log('\nfor...of');
    console.log(indices)
}

function squareThird(value) {
    return Math.sqrt(value) ** 3;
}

function weirdFunctionCalls() {
    console.log('\nWeird Function Calls');
    console.log(`squareThird(5) = ${squareThird(5)}`);
    console.log(`squareThird('river') = ${squareThird('river')}`);
    console.log(`squareThird() = ${squareThird()}`);
    console.log(`squareThird(16, 9, 'boat') = ${squareThird(16, 9, 'boat')}`);
    console.log(`squareThird('hi', 5) = ${squareThird('hi', 5)}`);
}

function squareFifth(value) {
    console.log(`typeof ${value} = ${typeof value}`);
    if (typeof value === 'number'){
        return Math.sqrt(value) ** 5;
    } else {
        return undefined;
    }
}

function typeCheckFunctionCalls() {
    console.log('\nType Check Function Calls');
    console.log(`squareFifth(5) = ${squareFifth(5)}`);
    console.log(`squareFifth('river') = ${squareFifth('river')}`);
    console.log(`squareFifth() = ${squareFifth()}`);
    console.log(`squareFifth(16, 9, 'boat') = ${squareFifth(16, 9, 'boat')}`);
    console.log(`squareFifth('hi', 5) = ${squareFifth('hi', 5)}`);

    let result = squareFifth('67');

    if (result) {
        console.log('result is truthy');
    }
}

function objectExample() {
    let myCar = {
        'tires': 'Goodyear',
        'year': '2019',
        'make': 'Ford',
        'miles traveled': 10_500
    };

    console.log(`myCar.tires = ${myCar.tires}`);
    console.log(`myCar['make'] = ${myCar['make']}`);
    console.log(`myCar['miles traveled'] = ${myCar['miles traveled']}`);
}