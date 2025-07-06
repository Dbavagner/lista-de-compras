let listaDeItens = [] 

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener('submit', function (event) {
    event.preventDefault()
    salvarItens()
})


function salvarItens() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase() )

    if (checarDuplicado){
        alert('Item já informado')
    } else {
        listaDeItens.push({
            valor: comprasItem
    
        })
    }
    console.log(listaDeItens)
    
}