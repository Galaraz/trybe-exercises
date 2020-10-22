

const promise = new Promise((resolve, reject) => {
    console.log('primeira promessa:');
    const number = Math.floor(Math.random() * 11);
  
    if (number > 10 || number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
    
  });

  //gestor de log 

  const promise1 = new Promise((resolve, reject) => {
    console.log('segunda promessa:');
    const number1 = Math.floor(Math.random() * 11);
  
    if (number1 > 10 || number1 <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number1}`));
    }
    resolve(console.log(`Que sucesso =) nosso número foi ${number1}`));
  });

  // gestor de log 2

  const promise2 = new Promise((resolve, reject) => {
    console.log('terceira promessa:');
    const number2 = Math.floor(Math.random()* 11);
  
    if (number2 > 10 || number2 <= 5) {
      return reject(number2);
    }
    resolve(number2);
  })
  .then(number2 => `Que sucesso =) nosso número foi ${number2}`)
  .then(msg => console.log(msg))
  .catch(number2 => console.log(`Que fracasso =( Nosso número foi ${number2}`));