const saveAndNewAddress = document.querySelector('#save-new-address')
const formAddress = document.querySelector('#form-client')

saveAndNewAddress.addEventListener('click', () => {
    console.log('endereco')
    formAddress.setAttribute('method', 'GET')
    formAddress.setAttribute('action', '/contato')
})
