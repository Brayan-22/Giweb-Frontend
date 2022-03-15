const keyboard = document.querySelector('.content_div-keyboard')
const value = document.querySelector('#valor');
var resultado = value.textContent;
const operacion={
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
    '.': '.',
    '+': '+',
    '-': '-',
    '/': '/',
    'x': '*'
}

keyboard.addEventListener('click',(e)=>{
    let caso=e.target.dataset.button;
    console.log(caso);
    try {
        if(caso==='del'){
            resultado=resultado.substring(0,resultado.length-1);
        }else
        if(caso==='reset'){
            resultado=''
        }else
        if(caso==='igual'){
            resultado=eval(resultado).toString()
        }else
        if(caso===undefined){
            resultado=resultado.concat('','')
        }
        else{
            resultado=resultado.concat('',operacion[caso])
        }
        value.textContent=resultado;
    } catch (error) {
        resultado='Syntax Error';
        value.textContent=resultado;
        console.log(resultado)
    }
    e.stopPropagation();
})