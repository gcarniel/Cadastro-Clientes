const inputCPF = document.querySelector('#cpf')
const inputCEP = document.querySelector('#cep')

if (inputCPF) {
    inputCPF.addEventListener('keydown', () => {
        inputCPF.value = mCPF(inputCPF.value)
    })
}

if (inputCEP) {
    inputCEP.addEventListener('keydown', () => {
        inputCEP.value = mCEP(inputCEP.value)
    })
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function mCEP(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2")
    return cep
}
