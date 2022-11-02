const crypto = require("crypto")

function hash(valor, algoritmo) {
    var hash = crypto.createHash(algoritmo).update(valor)
    return hash.digest('hex')
}


const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//-- console.log(hash('welcome', 'md5'))//

const crypto = require("crypto");
const algorithm = 'aes-256-cbc';
function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString();
}

function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
    }
    var hw = encrypt("Vamos a encriptar un texto");
    console.log(hw)
    console.log(decrypt(hw))
