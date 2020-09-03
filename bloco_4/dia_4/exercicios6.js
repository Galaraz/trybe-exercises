function verificaPalindrome(palavra){
    let np = []
    for (let letra = (palavra.length); letra != 0; letra -= 1)
        np.push(palavra[letra-1])
    let npr = np.join("")
    if (npr == palavra) {
        return true
  }
    else{
        return false
    }
}
console.log(verificaPalindrome("arara"))