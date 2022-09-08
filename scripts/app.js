window.onload = ()=> {
    createButtons();
}

function add (opd1, opd2) {
    return opd1 + opd2;
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

function operate (op, opd1, opd2) {
    switch(op) {
        case '+':
            add(opd1, opd2);
            break;
        case '-':
            subtract(opd1, opd2);
            break;
        case '*':
            multiply(opd1, opd2);
            break; 
        case '/':
            divide(opd1, opd2);
            break;
        default:
            break;
    }

}

const buttons = document.querySelector('.buttons');
function createButtons() {
    createNums();
    createOps();
    const clearBtn = document.createElement('button');
    clearBtn.classList.add('clear');
    clearBtn.innerText = "CL";
    buttons.appendChild(clearBtn);
}

function createNums() {
    for (let i = 0; i < 10; ++i) {
        const numsBtn = document.createElement('button');
        numsBtn.classList.add(i);
        numsBtn.innerText = i;
        buttons.appendChild(numsBtn);
    }
}

function createOps() {
    const ops = ['+','-','*','/','='];
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
        buttons.appendChild(opsBtn);
    }
}

