const saveAndNewAddress = document.querySelector('#save-new-address')
const formAddress = document.querySelector('#form-client')

const tipo = document.querySelector('#tipo-end-editar')
tipo.addEventListener('change', () => {
    console.log(tipo.value)
})


saveAndNewAddress.addEventListener('click', () => {
    console.log('endereco')
    formAddress.setAttribute('method', 'GET')
    formAddress.setAttribute('action', '/contato')
})
