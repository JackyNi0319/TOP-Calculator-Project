let num1 = 0;
let num2 = 0;
let opsHolder = "";
let numsHolder = "";
let screen = "";
let result = "";
let removeBin = "";
const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');
const ops = ['+','-','*','/', '='];

window.onload = ()=> {
    createButtons();
}

function add (opd1, opd2) {
    return +opd1 + +opd2;
}

function subtract (opd1, opd2) {
    return opd1 - opd2;
}

function multiply (opd1, opd2) {
    return opd1 * opd2;
}

function divide (opd1, opd2) {
    if (opd2 == 0) return 'NaN';
    return opd1 / opd2;
}

function operate (opd1, op, opd2) {
    switch(op) {
        case '+':
            return add(opd1, opd2);
        case '-':
            return subtract(opd1, opd2);
        case '*':
            return multiply(opd1, opd2);
        case '/':
            return divide(opd1, opd2);
        default:
            break;
    }

}

function calculateOps() {
    let len = opsHolder.length;
    let currOp = "";
    numsArr = numsHolder.split(" ");
    let tempRes = "";
    if (typeof(result) != 'number' && result != NaN && result != Infinity) {
        tempRes = numsArr.shift();
    } else {
        tempRes = result;
    }
    for (let i = 0; i < len && numsArr.length !== 0; ++i) {
        if (i == 0) {
            num1 = tempRes;
        } else {
            num1 = numsArr.shift();
        }
        num2 = numsArr.shift();

        currOp = opsHolder.charAt(i);
        console.log("yo:" + num1 + "|" + num2 + ":" + currOp);
        if (i == 0) {
            tempRes = +operate(num1, currOp, num2);
            continue;
        }
        tempRes += +operate(num1, currOp, num2);
    }
    opsHolder = "";
    numsHolder = "";
    return tempRes;
}

function createButtons() {
    createNums();
    createOps();
    const clearBtn = document.createElement('button');
    clearBtn.classList.add('clear');
    clearBtn.innerText = "CL";
    clearBtn.addEventListener('click', clearScreen);
    buttons.appendChild(clearBtn);
}

function createNums() {
    for (let i = 0; i < 10; ++i) {
        const numsBtn = document.createElement('button');
        numsBtn.classList.add(i);
        numsBtn.innerText = i;
        numsBtn.addEventListener('click', displayNum);
        buttons.appendChild(numsBtn);
    }
}

function createOps() {
    for (let i = 0; i < 5; ++i) {
        const opsBtn = document.createElement('button');
        switch(ops[i]) {
            case '+':
                opsBtn.classList.add('addition');
                break;
            case '-':
                opsBtn.classList.add('subtraction');
                break;
            case '*':
                opsBtn.classList.add('multiplication');
                break; 
            case '/':
                opsBtn.classList.add('division');
                break;
            case '=':
                opsBtn.classList.add('equal');
                break;
            default:
                break;
        }
        opsBtn.innerText = ops[i];
        opsBtn.addEventListener('click', displayOps);
        buttons.appendChild(opsBtn);
    }
}

function displayNum(e) {
    if (typeof(result) == 'number' && result != Infinity && result != NaN) {
        screen = "";
        result = "";
    }
    screen += e.target.textContent;
    numsHolder += e.target.textContent;
    display.innerText = screen;
}

function displayOps(e) {
    let len = screen.length;
    let checkOp = screen.charAt(len - 1);

    console.log(result + "{");
    console.log(typeof(result) == 'number');
    console.log(result + "SSS");
    if (typeof(result) == 'number' && result != Infinity && result != NaN && e.target.textContent == '=' && !ops.includes(opsHolder.charAt(0))) {
        console.log("s");
    } else if (len > 0) {
        console.log("ace");
        if (e.target.textContent == '=') {
            result = calculateOps();
            screen = result + "";
            display.innerText = screen;
        }
        else if (!ops.includes(checkOp)) {
            screen += e.target.textContent;
            numsHolder += " ";
            opsHolder += e.target.textContent;
            display.innerText = screen;
        }
    }
}

function clearScreen() {
    screen = "";
    result = "";
    numsHolder = "";
    display.innerText = screen;
}