document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('encrypt-btn').addEventListener('click', function() {
        let text = document.getElementById('input-text').value;
        let encryptedText = encrypt(text); // Aquí llamarías a tu función de encriptado
        document.getElementById('output-text').value = encryptedText;
    });

    document.getElementById('decrypt-btn').addEventListener('click', function() {
        let text = document.getElementById('input-text').value;
        let decryptedText = decrypt(text); // Aquí llamarías a tu función de desencriptado
        document.getElementById('output-text').value = decryptedText;
    });

    document.getElementById('copy-btn').addEventListener('click', function() {
        let text = document.getElementById('output-text');
        text.select();
        document.execCommand('copy');
    });
});

function encrypt(text) {
    // Implementa tu lógica de encriptado aquí
    return btoa(text); // Ejemplo simple de encriptado (Base64)
}

function decrypt(text) {
    // Implementa tu lógica de desencriptado aquí
    try {
        return atob(text); // Ejemplo simple de desencriptado (Base64)
    } catch (e) {
        return "Error al desencriptar el texto.";
    }
}
