const title = document.querySelector('.page-header > h1')
const tableAux = document.querySelectorAll('.table-aux [data-aux="row"]')
const selectTipo = document.querySelector('#tipo')
const inputDDD = document.querySelector('#ddd')
const inputNumero = document.querySelector('#numero')
const inputIDContato = document.querySelector('#id-contato')

const buttonNovo = document.querySelector('[data-aux="new-reg"]')


tableAux.forEach(tr => {
    tr.addEventListener('click', () => {
        inputIDContato.value = tr.cells[0].innerText
        selectTipo.value = tr.cells[1].innerText
        inputDDD.value = tr.cells[2].innerText
        inputNumero.value = tr.cells[3].innerText
    })
})

buttonNovo.addEventListener('click', () => {
    inputIDContato.value = ''
    selectTipo.value = ''
    inputDDD.value = ''
    inputNumero.value = ''
})
