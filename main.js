const link_to_convert = document.getElementById("link");
const format = document.getElementById("Format");
const Convert = document.getElementById("convert");
const result = document.getElementById("result");
const API_KEY = "b1lmHGpwLaMNlIeK0nXlnA==I1vnlxkMaFk4NQTD"


Convert.addEventListener('click', () => {
    
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(link_to_convert.value)}`;

    fetch(url)
    .then(response => response.blob())
    .then(blob => {
        const d = URL.createObjectURL(blob);
        console.log(d)
        result.innerHTML= `<img src ="${d}" alt="QR Code" width= "250" height="250">`
    })
    .catch(error => {
        console.error('Request failed', error);
        result.innerHTML = 'An error occured please try again later'
    })
})