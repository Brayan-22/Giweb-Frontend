const slider = document.querySelector('.content_div-slider')
slider.addEventListener('click',(e)=>{
    let estilos = document.getElementById('estilos')
    let caso = document.querySelector('#slider')
    let valor = caso.value;
    console.log(valor);
    switch(valor){
        case '1':
            estilos.setAttribute('href','estilos.css');
            break;
        case '2':
            estilos.setAttribute('href','estilos2.css');
            break;
        case '3':
            estilos.setAttribute('href','estilos3.css');
            break;
    }
})