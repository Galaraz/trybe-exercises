const factorials = (int) => {
    let factorial = 1;
    for (let i = int; i > 0; i -= 1) factorial *= i;
    return factorial;
  };