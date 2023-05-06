const encryptionKeys = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

const decryptionKeys = Object.entries(encryptionKeys).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

function processText() {
  const inputText = document.getElementById("inputText").value.toLowerCase();
  const mode = document.getElementById("mode").value;
  const processedText = document.getElementById("processedText");

  if (mode === "encrypt") {
    processedText.value = encrypt(inputText);
  } else if (mode === "decrypt") {
    processedText.value = decrypt(inputText);
  }
}

function encrypt(text) {
  return text.replace(/[aeiou]/g, match => encryptionKeys[match]);
}

function decrypt(text) {
  const pattern = new RegExp(Object.keys(decryptionKeys).join('|'), 'g');
  return text.replace(pattern, match => decryptionKeys[match]);
}

function copyToClipboard() {
  const processedText = document.getElementById("processedText");
  processedText.select();
  document.execCommand("copy");
}
