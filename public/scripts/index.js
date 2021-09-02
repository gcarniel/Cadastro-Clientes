const trs = document.querySelectorAll('.datas-client')
const buttonSearch = document.querySelector('.button-search')
const inputSearch = document.querySelector('#search')

buttonSearch.addEventListener('click', () => {
    trs.forEach(tr => {
        const name = tr.querySelector('td.name').innerText

        if (name.toUpperCase().includes(inputSearch.value.toUpperCase())) {
            tr.classList.remove('visible')
        } else {
            tr.classList.add('visible')
        }

        if (inputSearch.value == '') {
            tr.classList.remove('visible')
        }

    })

})
