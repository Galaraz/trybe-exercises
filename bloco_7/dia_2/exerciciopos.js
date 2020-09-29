const lesson1 = {
    materia: 'Matemática',
    numeroAlunos: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroAlunos: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroAlunos: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNewKey = (obj, key, value) => {
    obj[key] = value;
  };
  
  addNewKey(lesson2, 'turno', 'manha');

  const listKeys = (obj) =>  Object.keys(obj);
  console.log(listKeys(lesson2));
