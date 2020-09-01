let n =5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;


    
  for (let i = 0; i < n; i += 1) {
    for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
      if (columnIndex < inputPosition) {
        inputLine = inputLine + ' ';
      } else {
        inputLine = inputLine + symbol;
      }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
  };