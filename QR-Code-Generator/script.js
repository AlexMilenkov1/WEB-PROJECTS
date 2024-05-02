const qrApi = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150'

const inputElement = document.getElementById('input-content')
const qrButton = document.getElementById('qr-button')
const qrImg = document.querySelector('#qr-box-img img')

function createQRCode(text) {
    const transformedText = `&data=${text}`

    const newQRCode = qrApi + transformedText

    return newQRCode
}

qrButton.addEventListener('click', () => {
    if (!inputElement.value) {
        return
    }

    const qrText = inputElement.value

    const qrCodeAdress = createQRCode(qrText)

    qrImg.src = qrCodeAdress
})