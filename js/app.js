let billinput = document.getElementsByClassName('bill-input')[0]
let input = document.getElementsByClassName('input')
let pplContInfo = document.getElementsByClassName('ppl-cont-info')[0]
let cBox = document.getElementsByClassName('c-box')[0]



function brdr (){
    input[0].addEventListener('click', () => {
        billinput.classList.add('bill-container--active')
        pplContInfo.classList.remove('ppl-cont-info--active')
    })

    cBox.addEventListener('click', () => {
        billinput.classList.remove('bill-container--active')
        pplContInfo.classList.remove('ppl-cont-info--active')
    })

    input[1].addEventListener('click', () => {
        // pplContInfo.classList.add('ppl-cont-info--active')
        billinput.classList.remove('bill-container--active')
        pplContInfo.classList.add('ppl-cont-info--active')
    })  
    input[1].addEventListener('input', () =>{
        if(Number(input[1].value) == 0 || input[1].value == ''){
            pplContInfo.classList.add('ppl-cont-info--error')
            
        }else {
            pplContInfo.classList.remove('ppl-cont-info--error')
            pplContInfo.classList.add('ppl-cont-info--active')
        }})

        function percent(value1, value2){
            let result = value1 * value2
        }
}
brdr()

