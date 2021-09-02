const tipo = document.querySelector('#tipo-contact-editar')
const title = document.querySelector('.page-header > h1')

tipo.addEventListener('change', () => {
    console.log(tipo.value)

    if (tipo.value === '') {
        title.textContent = "Adicionar Contato"
    } else {
        title.textContent = "Editando Contato"
    }
})

