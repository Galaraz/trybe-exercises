function fizzBuzz(arry) {
  let arryDeString = [];

  for (let index = 0; index < arry.length; index++) {
    let element;
    console.log(arry);

    if (arry[index] % 5 == 0 && arry[index] % 3 == 0) {
      element = "fizzBuzz";
    } else {
      if (arry[index] % 3 == 0) {
        element = "fizz";
      }

      if (arry[index] % 5 == 0) {
        element = "buzz";
      } else {
        element = "bug!";
      }
    }
    arryDeString.push(element);
    element = "";
  }

  return arryDeString;
}
