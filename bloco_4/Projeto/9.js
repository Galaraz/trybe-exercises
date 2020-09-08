function encode(params) {
  let A = "1";
  let E = "2";
  let I = "3";
  let O = "4";
  let U = "5";
  let element = "";

  params = "helo word";
  
  for (let key in params) {
    // verificar e alterar
    switch (params[key]) {
      case "a":
        element = element + A;
        break;
      case "e":
        element = element + E;
        break;
      case "i":
        element = element + I;
        break;
      case "o":
        element = element + O;
        break;
      case "U":
        element = element + U;
        break;
      default:
        element = element + params[key];
        break;
    }
  }

  return element;
}

function decode(element) {
  // seu código aqui
  let A = "a"; //1
  let E = "e"; // 2
  let I = "i"; // 3
  let O = "o"; // 4
  let U = "u"; // 5
  let params = "";

  element = "h2l4 w4rd";
  // console.log(params);
  // percorer arry
  for (let key in element) {
    // verificar e alterar
    switch (element[key]) {
      case "1":
        params = params + A;
        break;
      case "2":
        params = params + E;
        break;
      case "3":
        params = params + I;
        break;
      case "4":
        params = params + O;
        break;
      case "5":
        params = params + U;
        break;
      default:
        params = params + element[key];
        break;
    }
  }
  return params;
}
console.log(encode());
console.log(decode());
