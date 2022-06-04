let input = document.getElementById(`screen`);
let numberOne = 0;
let selectedAmal = ``;
let selectedAmalOrginal = ``;

function addNumber(number) {
    console.log(number);

    if (input.value.indexOf(`.`) !== -1 && number === `.`) {
        
    } else {
        if (input.value === `0` && number !== `.` || selectedAmal.length > 0) {
            input.value = number;
            selectedAmal = ``;
        } else {
            input.value += number;
        }
    }
}

function action(amal) {
    console.log(amal);
    selectedAmal = amal;
    selectedAmalOrginal = amal;
    numberOne = input.value;
    if (action === `root`) {
        result = Math.sqrt(selectedAmalOrginal);
    } else if (action === `degree`) {
        result = Math.pow(selectedAmal, selectedAmalOrginal);
    } 
}

function equal() {
    let numberTwo = input.value;
    let result = ``;
    if (selectedAmalOrginal === `add`) {
        result = parseFloat(numberOne) + parseFloat(numberTwo);
    } else if (selectedAmalOrginal === `minus`) {
        result = numberOne - numberTwo;
    } else if (selectedAmalOrginal === `multiply`) {
        result = numberOne * numberTwo;
    } else if (selectedAmalOrginal === `divide`) {
        result = numberOne / numberTwo;
    } 
    input.value = result;
}

function clear() {
    selectedAmal = "";
    selectedAmalOrginal = "";
    numberOne = 0;
    input.value = 0;
}

document.addEventListener(`keydown`, function (event){
    if (event.keyCode === 96) {
        addNumber(0)
    } else if (event.keyCode === 97) {
        addNumber(1)
    } else if (event.keyCode === 98) {
        addNumber(2)
    } else if (event.keyCode === 99) {
        addNumber(3)
    } else if (event.keyCode === 100) {
        addNumber(4)
    } else if (event.keyCode === 101) {
        addNumber(5)
    } else if (event.keyCode === 102) {
        addNumber(6)
    } else if (event.keyCode === 103) {
        addNumber(7)
    } else if (event.keyCode === 104) {
        addNumber(8)
    } else if (event.keyCode === 105) {
        addNumber(9)
    } else if (event.keyCode === 107) {
        action(`add`)
    } else if (event.keyCode === 109) {
        action(`minus`)
    } else if (event.keyCode === 106) {
        action(`multiply`)
    } else if (event.keyCode === 111) {
        action(`divide`)
    } else if (event.keyCode === 13) {
        equal();
    }  else if (event.keyCode === 67) {
        clear();
    }
})