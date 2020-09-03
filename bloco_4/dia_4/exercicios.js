let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log("Bem Vinda, " + info.personagem);



info.recorrente = "sim";


console.log(info);


  for (let key in info) {
      
        
         console.log(key);
         console.log(info[key]);
          
      }
 