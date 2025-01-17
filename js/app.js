let precoTotal;
let valorTotal = document.getElementById("valor-total");
let carrinhoCompra = document.getElementById("lista-produtos");

limpar();


function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    // Validando produto selecionado
    if (!produto || produto.trim() === "") {
        alert("Selecione num produto válido.")
        return;
    }

    // Validando quantidade inserida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let subTotal = (quantidade * valorUnitario);

    carrinhoCompra.innerHTML = (carrinhoCompra.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`);

    precoTotal += subTotal;
    valorTotal.innerHTML = `R$${precoTotal}`;

    document.getElementById("quantidade").value = '';
}


function limpar() {
    carrinhoCompra.innerHTML = ""
    precoTotal = 0;
    valorTotal.innerHTML = "R$0"
    document.getElementById("quantidade").value = ''
}