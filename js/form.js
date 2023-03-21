let addButton = document.querySelector('#addVenda')
addButton.addEventListener('click', function (evento) {


    evento.preventDefault()


    let form = document.querySelector('#addForm')


    let venda = obterValDoForm(form)

    addVendaNaTable(venda)

    let erros = validaVenda(venda)


    if (erros.length > 0) {
        exibirMensagemDeErro(erros)
        return
    }
    addVendaNaTable(venda)

    let mensagemError = document.querySelector("#mensagensError")
    mensagemError = ''
})


function validaVenda(venda) {
    let erros = []


    if (venda.nomeClie.length == 0) {
        erros.push('O "Nome do cliente" não pode estar em branco')
    }
    if (venda.proVen.length == 0) {
        erros.push('O "Produto vendido" não pode estar em branco')
    }
    if (venda.quant.length == 0) {
        erros.push('A "Quantidade" não pode estar em branco')
    }
    if (venda.valTot.length == 0) {
        erros.push('O "Valor total" não pode estar em branco')
    }

    return erros
}

function exibirMensagemDeErro(erros) {
    let ul = document.querySelector('#mensagensError')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function addVendaNaTable(venda) {
    let vendaTr = buildTr(venda)
    let table = document.querySelector('#tabVendas')
    table.appendChild(vendaTr)
}



function buildTr(venda) {
    let vendaTr = document.createElement('tr')
    vendaTr.classList.add('venda')

    vendaTr.appendChild(buildTr(venda.nomeClie.value, 'info-nomeClie'))
    vendaTr.appendChild(buildTr(venda.proVen.value, 'info-proVen'))
    vendaTr.appendChild(buildTr(venda.quant.value, 'info-quant'))
    vendaTr.appendChild(buildTr(venda.valTot.value, 'info-valTot'))

    return vendaTr
}

function buildTr(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function obterValDoForm(form) {
    let venda = {
        nomeClie: form.nomeClie.value,
        proVen: form.proVen.value,
        quant: form.quant.value,
        valTot: form.valTot.value,
    }
    return venda
}
