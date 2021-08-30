const wrapper = document.querySelector('.modal-wrapper');
const element = document.querySelector('.modal');
const cancelButton = element.querySelector("footer .button:nth-child(1)")

cancelButton.addEventListener('click', () => {
  wrapper.classList.remove('on')
})

const datas = document.querySelectorAll('.datas-client')
const deleteForm = document.querySelector('#delete-cliente')

for (let data of datas) {
  const id = data.dataset.id

  const deleteButton = data.querySelector('.button-delete')

  deleteButton.addEventListener('click', () => {
    wrapper.classList.add('on')
    deleteForm.setAttribute('action', '/deletar/' + id)
  })
}