const screen = document.querySelector('#screen')
const numericPad = document.querySelector('#numericPad')
const btn = document.querySelectorAll('.btn')
const operator = document.querySelectorAll('button:nth-child(4n)')
const equal = document.querySelector('#egale')

let calcul = [];

for(let bouton of btn){
    bouton.addEventListener('click', calculer)
}

// btn.forEach(function(item){ 
//      item.addEventListener('click', calculer)
// })

function calculer(e){
    let buttonValue  = e.target.textContent

    if(buttonValue == '×'){
        buttonValue = buttonValue.replace('×','*')
    }

    if(buttonValue == '÷'){
        buttonValue = buttonValue.replace('÷','/')
    }

    if(buttonValue != '='){
        calcul.push(buttonValue)
        screen.value = calcul.join('')
    }else{
        var result = eval(screen.value)
        screen.value = result
        calcul[result]
    }

    if(buttonValue == 'C'){
        screen.value='0';
        result = 0;
        calcul = []
    }
}