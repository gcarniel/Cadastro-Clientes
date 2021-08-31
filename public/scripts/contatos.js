const saveAndNewContact = document.querySelector('#save-new-contact')
const formContact = document.querySelector('#form-client')

saveAndNewContact.addEventListener('click', () => {
    console.log('contato')
    formContact.setAttribute('method', 'GET')
    formContact.setAttribute('action', '/redes')
})
