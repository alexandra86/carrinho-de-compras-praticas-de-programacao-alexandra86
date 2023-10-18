var qtd = [0, 0, 0]; //quantidade de cada produto;
var valorProduto = [45.0, 39.9, 49.9]; //valor unitário de cada produto;
var valorTotal = [0, 0, 0]; //valor total de cada produto;

function adicionarItem(item) {
  var quantidade = document.getElementById("quantidade" + item);
  qtd[item] = qtd[item] + 1; //cálculo que adiciona +1 na quantidade;
  quantidade.innerHTML = qtd[item]; //exibe o valor da quantidade na tela;

  var total = document.getElementById("total" + item);
  valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item]);
  //multiplica unitário pela quantidade;
  total.innerHTML = valorTotal[item].toFixed(2);
  //exibe o valor total do produto na tela;

  valorCompra();
}

function removerItem(item) {
  if (qtd[item] > 0) {
    var quantidade = document.getElementById("quantidade" + item);
    qtd[item] = qtd[item] - 1; //cálculo que remove -1 na quantidade;
    quantidade.innerHTML = qtd[item]; //exibe o valor da quantidade na tela;
  }

  var total = document.getElementById("total" + item);
  valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item]);
  //multiplica unitário pela quantidade;
  total.innerHTML = valorTotal[item].toFixed(2);
  //exibe o valor total do produto na tela;

  valorCompra();
}

function valorCompra() {
  var valorTotalCompra = document.getElementById("valorTotalCompra");
  var valor = 0;
  for (var i = 0; i < valorTotal.length; i++) {
    valor += valorTotal[i];
  }
  valorTotalCompra.innerHTML = valor.toFixed(2);
}

//template bootstrap: https://bbbootstrap.com/snippets/bootstrap-ecommerce-cart-page-template-91851305#
