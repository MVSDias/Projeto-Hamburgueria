const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './assets/xsalada.png' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './assets/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './assets/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './assets/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './assets/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './assets/monstruoso-vegan.png' },
]

const menuCard = document.querySelector('.menu-cards')
console.log(menuCard)

function mostrarTudo(array){
    let myMenu = ''
    array.forEach(element => {
        myMenu = myMenu + 
           `<li class="card">
            <img class="imagem" src=${element.src} alt="imagem-hamburguer">
            <p class="nome-sanduba">${element.name}/p>
            <p class="valor-sanduba">R$ ${(element.price).toFixed(2)}</p>
            </li>` 
        
    });

   menuCard.innerHTML = myMenu
}

function calculateDiscount(){
    const priceWithDiscount = menuOptions.map(element =>{
        return {// usando o spread...

             ...element,
             price: element.price * .90,

            // name: element.name,
            // price: element.price * .90,
            // vegan: element.vegan,
            // src: element.src
        }
        
    })
    mostrarTudo(priceWithDiscount)
}

function somarTudo(){
    const totalPrice = menuOptions.reduce((acc, value) =>{
        return acc + value.price
    }, 0)

    menuCard.innerHTML = `
        <li class="card">
        
        <p class="valor-sanduba">O preço total<br> de todos  os sanduiches<br> é R$ ${(totalPrice).toFixed(2)}</p>
        </li> `
}

function filtrar(){

    const menuFiltrado = menuOptions.filter(element =>{
        if(element.vegan === true){
            return true
        }
          
    })
    mostrarTudo(menuFiltrado) 
}