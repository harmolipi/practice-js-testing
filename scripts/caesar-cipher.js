function caesarCipher(str, shift) {
  return str.replace(/[a-z]/gi, (char) => {
    return String.fromCharCode(
      ((char.charCodeAt(0) - caseAdjustment(char) + shift) % 26) +
        caseAdjustment(char)
    );
  });
}

function caseAdjustment(char) {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? 97 : 65;
}

module.exports = caesarCipher;
