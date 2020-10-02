/* 
Fonte: http://osherove.com/tdd-kata-3-refactoring/ TDD Kata 3
Crie uma classe de verificação de senha chamada “PasswordVerifier”.
Adicione as seguintes verificações a uma função mestre chamada “Verify ()”
1-a senha deve ter mais de 8 caracteres
2-a senha não deve ser nula
3-a senha deve ter pelo menos uma letra maiúscula
4-a senha deve ter pelo menos uma letra minúscula
5-a senha deve ter pelo menos um número

Cada um deles deve lançar uma exceção com uma mensagem diferente de sua escolha
2-Adicionar recurso: a senha está OK se pelo menos três das condições anteriores forem verdadeiras
3-Adicionar recurso: a senha nunca está OK se o item 1.4 não for verdadeiro.
4-Suponha que cada verificação leve 1 segundo para ser concluída. Como você resolveria os itens 2 e 3 para que os testes pudessem ser executados mais rapidamente? */

/* codigo */
function verify(password) {
    if (password == null) return false;
    else if (password.length <= 8) return false;
    else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password))
      return false;
    return true;
  }
  
  /* module.exports = verify; */



/* teste */

const verify = require('./password-verification');
const assert = require('assert');

assert.equal(typeof verify, 'function');
// Password should be larger than 8 chars
assert(!verify('12345678'));
// Password should not be null
assert(!verify(null));
// Password should have one uppercase letter at least
assert(!verify('gandalfthegray'));
// Password should have one lowercase letter at least
assert(!verify('YOUSHALLNOTPASS'));
// Password should have one number at least
assert(!verify('GandalfTheWhite'));
// Correct password
assert(verify('G4nd4lfTh3Wh1t3'));