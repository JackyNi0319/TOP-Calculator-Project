let num1 = 0;
let num2 = 0;
let op = "";
let screen = "";
let result = "";
const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');
const ops = ['+','-','*','/','='];

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
    console.log('wwwoow');
    screen += e.target.textContent;
    display.innerText = screen;
}

function displayOps(e) {
    let len = screen.length;
    if (len > 0) {
        let checkOp = screen.charAt(len - 1);

        if (e.target.textContent == '=') {
            num1 = screen.substr(0, screen.indexOf(op));
            num2 = screen.substr(screen.indexOf(op) + 1);
            result = operate(num1, op, num2);
            screen = result + "";
            display.innerText = screen;
        }
        else if (!ops.includes(checkOp)) {
            screen += e.target.textContent;
            op = e.target.textContent;
            display.innerText = screen;
        }
    }
}

function clearScreen() {
    screen = "";
    display.innerText = screen;
}