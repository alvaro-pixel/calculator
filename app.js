

const OPERATOR_BOOLEANS = {plusActive: [false, true]};

let isSumActive = false;
let isSubActive = false;
let isMulActive = false;
let isDivActive = false;


let firstDigitSum = 0;
let firstDigitSub = 0;
let firstDigitMult = 0;
let firstDigitDivd = 0;



const calculatorInput = document.getElementById('input');
const erasebtn = document.getElementById('erase');

const OPERATORS = ['plus', 'minus', 'times', 'divide'];
const plus = document.getElementById(OPERATORS[0]);
const minus = document.getElementById(OPERATORS[1]);
const times = document.getElementById(OPERATORS[2]);
const divide = document.getElementById(OPERATORS[3]);

//Accent operators *please read terminology in calculators
const enter = document.getElementById('enter');

//Set numbers input field to 0
calculatorInput.innerHTML = 0;

//this basically selects all the buttons with the class of digits
//This in turns means that all the buttons will act as array which can then be access separate 
//with a loop
const buttons = document.querySelectorAll('.digits');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains('seven')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 7;
        }
        else if (styles.contains('eight')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 8;
        }

        else if (styles.contains('nine')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 9;
        }

        else if (styles.contains('four')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 4;
        }

        else if (styles.contains('five')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 5;
        }

        else if (styles.contains('six')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 6;
        }

        else if (styles.contains('one')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 1;
        }

        else if (styles.contains('two')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 2;
        }

        else if (styles.contains('three')) {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 3;
        }

        else {
            calculatorInput.innerHTML = ' ';
            calculatorInput.innerHTML += 0;
        }



    });



});

//Setting input field to zero
erase.addEventListener('click', function () {
    calculatorInput.innerHTML = 0;
});

//Displaying operators on the inputfield

//Select Plus Operator
plus.addEventListener('click', function () {
    firstDigitSum = calculatorInput.innerHTML;
    calculatorInput.innerHTML = '+';
    isSumActive = OPERATOR_BOOLEANS.plusActive[1];

    //Turn off other operators while being used
    isSubActive = OPERATOR_BOOLEANS.plusActive[0];
    isMulActive = OPERATOR_BOOLEANS.plusActive[0];
    isDivActive = OPERATOR_BOOLEANS.plusActive[0];



});

//Select Minus Operator
minus.addEventListener('click', function () {
    firstDigitSub = calculatorInput.innerHTML;
    calculatorInput.innerHTML = '-';

    isSubActive = OPERATOR_BOOLEANS.plusActive[1];

    //Turn off other operators while being used
    isSumActive = OPERATOR_BOOLEANS.plusActive[0];
    isMultActive = OPERATOR_BOOLEANS.plusActive[0];
    isDivActive = OPERATOR_BOOLEANS.plusActive[0];

});

times.addEventListener('click', function () {
    firstDigitMult = calculatorInput.innerHTML;
    calculatorInput.innerHTML = '*';

    isMultActive = OPERATOR_BOOLEANS.plusActive[1];

    //Turn off other operators while being used
    isSumActive = OPERATOR_BOOLEANS.plusActive[0];
    isSubtActive = OPERATOR_BOOLEANS.plusActive[0];
    isDivActive = OPERATOR_BOOLEANS.plusActive[0];



});

divide.addEventListener('click', function () {
    firstDigitDivd = calculatorInput.innerHTML;
    calculatorInput.innerHTML = '/';

    isDivActive = OPERATOR_BOOLEANS.plusActive[1];

    //Turn off other operators while being used
    isMultActive = OPERATOR_BOOLEANS.plusActive[0];
    isSubActive = OPERATOR_BOOLEANS.plusActive[0];
    isSumActive = OPERATOR_BOOLEANS.plusActive[0];

});

//'ENTER' button which concludes operation
enter.addEventListener('click', function () {
    //Sum function call
    if (isSumActive == true) {
        addfn(firstDigitSum, calculatorInput.innerHTML);
        firstDigitSum = 0;
    };

    //Sub function call
    if (isSubActive == true) {
        subtractfn(firstDigitSub, calculatorInput.innerHTML);
        firstDigitSum = 0;
    };

    //Mult function call
    if (isMultActive == true) {
        multiplyfn(firstDigitMult, calculatorInput.innerHTML);
        firstDigitSum = 0;
    };

     //Divide function call
     if (isDivActive == true) {
        dividefn(firstDigitMult, calculatorInput.innerHTML);
        firstDigitSum = 0;
    };

});

//Adding function
function addfn(a, b) {
    calculatorInput.innerHTML = parseInt(a) + parseInt(b);
};

//Subtract function
function subtractfn(a, b) {
    calculatorInput.innerHTML = parseInt(a) - parseInt(b);
};

//Subtract function
function multiplyfn(a, b) {
    calculatorInput.innerHTML = parseInt(a) * parseInt(b);
};

//Subtract function
function dividefn(a, b) {
    calculatorInput.innerHTML = parseInt(a) % parseInt(b);
};



