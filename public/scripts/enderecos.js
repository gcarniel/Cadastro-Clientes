const buttonSaveAddress = document.querySelector('#save-address')
const inputsAddress = document.querySelectorAll('.client-address > .inputs-address input')
console.log(inputsAddress)

buttonSaveAddress.addEventListener('click', () => {
    const address = []
    inputsAddress.forEach(input => {
        const key = input.name
        const value = input.value
        console.log(key, value)
        return address.push({[key]: value})
    })
    console.log(address)
})