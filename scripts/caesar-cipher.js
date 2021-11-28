function caesarCipher(str, shift) {
  return str.replace(/[a-z]/gi, (char) => {
    let caseAdjustment =
      char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? 97 : 65;
    return String.fromCharCode(
      ((char.charCodeAt(0) - caseAdjustment + shift) % 26) + caseAdjustment
    );
  });
}

module.exports = caesarCipher;
