const items=document.getElementById('items')

const templateCard=document.getElementById('template-card').content

const fragment = document.createDocumentFragment()

const buttonsGroup=document.getElementById('grupoBotones')



document.addEventListener('DOMContentLoaded',()=>{
    fetchData('apiRestaurant.json')
})



const fetchData = async (caso)=>{
    try{
        const res = await fetch(caso)
        const data = await res.json()
        pintarCards(data)
    }catch(error){
        console.log(error)
    }
}


buttonsGroup.addEventListener('click',(e)=>{
    let caso=e.target.dataset.button;
    console.log(caso)
    try {
        if(caso=='Restaurante'){
            while(items.firstChild){
                items.removeChild(items.firstChild);
            }
            fetchData('apiRestaurant.json')
        }
        if(caso=='Supermercado'){
            while(items.firstChild){
                items.removeChild(items.firstChild)
            }
            fetchData('apiSupermarket.json')
        }
        if(caso=='Farmacia'){
            while(items.firstChild){
                items.removeChild(items.firstChild)
            }
            fetchData('apiFarmacia.json')
        }
        if(caso=='Licor'){
            while(items.firstChild){
                items.removeChild(items.firstChild)
            }
            fetchData('apiLicores.json')
        }
    } catch (error) {
    }
    e.stopPropagation();
})

const pintarCards= data=>{

    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent=producto.precio
        templateCard.querySelector('img').setAttribute("src",producto.img)
        templateCard.querySelector('.btn-comprar').setAttribute("data-button",'comprar')
        templateCard.querySelector('.btn-eliminar').setAttribute("data-button",'eliminar')
        templateCard.querySelector('.valor').setAttribute("id","valor"+producto.title)
        templateCard.querySelector('.valor').textContent='0'
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    items.appendChild(fragment)
}


//const value=document.querySelector('#valor')
//var cantidad=parseInt(value.textContent)
//const buttonsGroup2=document.getElementById('grupoBotonesCompras')
//buttonsGroup2.addEventListener('click',(e)=>{
//    let caso=e.target.dataset.button;
//    try {
//        if(caso=='comprar' && cantidad>=0){
//            cantidad+=1
//        }else if(caso=='eliminar' && cantidad>0){
//            cantidad-=1
//        }else{
//            cantidad=0
//        }
//        value.textContent=cantidad.toString()
//        console.log(value.textContent);
//    } catch (error) {
//    }
//})