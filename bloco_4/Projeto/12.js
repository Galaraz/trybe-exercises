function triangleCheck(ladoA, ladoB, ladoC) {
  // seu código aqui
  if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    return true;
  }

  return false;
}
