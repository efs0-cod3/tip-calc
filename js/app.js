let billinput = document.getElementsByClassName('bill-input')[0];
let input = document.getElementsByClassName('input');
let pplContInfo = document.getElementsByClassName('ppl-cont-info')[0];
let err = document.getElementsByClassName('error')[0];
let cBox = document.getElementsByClassName('c-box')[0];
let pBtn = document.querySelectorAll('.p-btn');
let reset = document.getElementsByClassName('reset')[0];
let tAP = document.getElementsByClassName('total-ta')[0];
let amountXPerson = document.getElementsByClassName('total-pp')[0];
let percent;

input[0].addEventListener('click', () => {
    billinput.classList.add('bill-container--active')
    pplContInfo.classList.remove('ppl-cont-info--active')
})

cBox.addEventListener('click', () => {
    billinput.classList.remove('bill-container--active')
    pplContInfo.classList.remove('ppl-cont-info--active')
})

input[1].addEventListener('click', () => {
    billinput.classList.remove('bill-container--active')
    pplContInfo.classList.add('ppl-cont-info--active')
})

// change border color if 0 es inserted
input[1].addEventListener('input', () => {
    if (Number(input[1].value) == 0 || input[1].value == '') {
        pplContInfo.classList.add('ppl-cont-info--error')
        err.classList.add('error--active')
        
        
    } else {
        err.classList.remove('error--active')
        pplContInfo.classList.remove('ppl-cont-info--error')
        pplContInfo.classList.add('ppl-cont-info--active')
    }
})


pBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        elem.classList.add('p-btn--active')
        if (elem.id.includes('b1')) {
            percent = 5;
        } else if (elem.id.includes('b2')) {
            percent = 10;
        } else if (elem.id.includes('b3')) {
            percent = 15;
        } else if (elem.id.includes('b4')) {
            percent = 25;
        } else {
            percent = 50;
        }
    })
});

cBox.addEventListener('input', () => {
    if (cBox.value === '') {
    } else {
        percent = cBox.value
    }
})

function totalAndTipAmount (value1, value2,value3) {
    let t_amount = value1 / 100 * value3;
    tAP.innerText = t_amount.toFixed(2)

    let total_Person = value1 / value2;
    amountXPerson.innerText = (total_Person + t_amount).toFixed(2);
}

window.addEventListener('input', () => {
    if(input[0].value === '' || input[1].value === ''){
        return
    } else {
    return totalAndTipAmount(parseFloat(input[0].value), parseFloat(input[1].value),parseFloat(percent));
    }
})

reset.addEventListener('click', ()=>{
    window.location.reload(true)
})