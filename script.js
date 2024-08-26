let encryptMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

let decryptMap = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function encrypt(text) {
    return text.split('').map(char => encryptMap[char] || char).join('');
}

function decrypt(text) {
    for (let key in decryptMap) {
        text = text.split(key).join(decryptMap[key]);
    }
    return text;
}

function processText() {
    let inputText = document.getElementById('inputText').value;
    let outputText = document.getElementById('outputText');
    let mode = document.querySelector('input[name="mode"]:checked').value;

    if (mode === 'encrypt') {
        outputText.value = encrypt(inputText);
    } else {
        outputText.value = decrypt(inputText);
    }
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}

// Eventos
document.getElementById('processButton').addEventListener('click', processText);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);