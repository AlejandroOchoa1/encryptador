
function encryptar(){
    detectaNotexto();

    var inputValue = document.getElementById('entrada_texto').value;

    const encryptedText = encrypt(inputValue);

    document.getElementById('myImage').style.display = 'none';

    var textArea = document.getElementById('myTextarea');
    textArea.style.display ='block'
    textArea.value = encryptedText;

    document.getElementById('copyButton').style.display = 'block';
    cleanEntradaTexto();

}

function desencryptar(){
    detectaNotexto();
    var inputValue = document.getElementById('entrada_texto').value;

    const decrypText = decrypt(inputValue)

    document.getElementById('myImage').style.display = 'none';
    var textArea = document.getElementById('myTextarea');
    textArea.style.display ='block'
    textArea.value = decrypText;

    document.getElementById('copyButton').style.display = 'block';
    cleanEntradaTexto();
}


function encrypt(text){
    return text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}


function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function detectaNotexto(){
var textoIngresado = document.getElementById('entrada_texto').value.trim();
    if(textoIngresado === ''){
        alert("El campo de texto esta vacío. Por favor, ingrese algo antes de Encryptar o Desencryptar");       
    }

}

function cleanEntradaTexto(){
    document.getElementById('entrada_texto').value = ''
}

function copyText() {
    const outputText = document.getElementById('myTextarea');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
    cleanMyTextarea();
    botonCopiarDesaparecer();
}


function botonCopiarDesaparecer(){
    document.getElementById('copyButton').style.display = 'none';

}


function cleanMyTextarea(){
    document.getElementById('myTextarea').value = '';
    document.getElementById('myTextarea').style.display= 'none';
    document.getElementById('myImage').style.display = 'block';
    
}