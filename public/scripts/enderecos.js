const tableAux = document.querySelectorAll('.table-aux [data-aux="row"]')
const inputIDEndereco = document.querySelector('#id-endereco')
const selectTipo = document.querySelector('#tipo')
const inputRua = document.querySelector('#rua')
const inputNumero = document.querySelector('#numero')
const inputBairro = document.querySelector('#bairro')
const inputCidade = document.querySelector('#cidade')
const inputCEP = document.querySelector('#cep')

const buttonNovo = document.querySelector('[data-aux="new-reg"]')

tableAux.forEach(tr => {
    tr.addEventListener('click', () => {
        inputIDEndereco.value = tr.cells[0].innerText
        selectTipo.value = tr.cells[1].innerText
        inputRua.value = tr.cells[2].innerText
        inputNumero.value = tr.cells[3].innerText
        inputBairro.value = tr.cells[4].innerText
        inputCidade.value = tr.cells[5].innerText
        inputCEP.value = tr.cells[6].innerText
    })
})

buttonNovo.addEventListener('click', () => {
    inputIDEndereco.value = ''
    selectTipo.value = ''
    inputRua.value = ''
    inputNumero.value = ''
    inputBairro.value = ''
    inputCidade.value = ''
    inputCEP.value = ''
})
