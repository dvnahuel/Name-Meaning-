document.querySelector('.inputname').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter

      var inputname = document.getElementById('inputname').value;
      var significa = document.getElementById('significa');

      var i = inputname.toLowerCase();
      significa.textContent = getName(i);

      significa.style.visibility = 'visible';
    }
});
var res = str.toLowerCase();

function getName(inputname) {

  var answer = "";

  switch (inputname) {
    //NOMBRE VARONES
    case 'nahuel':
      answer =  'Nombre propio masculino. Su significado es "gran felino" refiriéndose al jaguar o yaguareté del norte de Argentina, que es el mayor félido de América y el tercero del mundo.';
      break;
    case 'mateo':
      answer =  'Nombre de origen religioso que significa “El gran regalo de nuestro Señor”';
      break;
    case 'sebastian':
      answer =  'El origen de Sebastián se remonta al idioma griego que significa honrar';
      break;
    case 'benjamin':
      answer =  'Significa hijo menor de una familia';
      break;
    case 'martin':
      answer =  'Significa “El hombre consagrado con Marte”. Está muy relacionado con los guerreros, la fuerza y el honor, debido a su etimología latina.';
      break;
    case 'nicolas':
      answer = 'Nicolás es un nombre propio masculino de origen griego que significa La victoria del pueblo.';
      break;
    case 'alejandro':
      answer = 'Es un nombre de pila masculino de origen griego que significa "el defensor, el protector" o "el salvador del varón".';
      break;
    case 'lucas':
      answer = 'Es un nombre masculino de origen griego, cuyo significado es luminoso o el que resplandece.';
      break;
    case 'diego':
      answer = 'El significado de Diego podría definirse como “El hombre instruido“, o “Bien enseñado”.';
      break;
    case 'juan':
      answer = 'Significa "el fiel a Dios"';
      break;
    case 'tomas':
      answer = 'Tiene como significado "el hermano"';
      break;
    case 'thiago':
      answer = 'El significado de Thiago es "Dios nos dará recompensa".';
      break;
    case 'matias':
      answer = 'Significa "regalo o don de Dios"';
      break;
    case 'jonatan':
      answer = 'Significado que se le atribuye es “El don de nuestro señor”';
      break;
    case 'ezequiel':
      answer = 'Tiene como significado "Aquel que es fortalecido por Dios" o "Aquel que Dios es su fortaleza"';
      break;
    case 'david':
      answer = 'Significa "el amado y querido" o "el elegido de Dios"';
      break;
    case 'luciano':
      answer =  'Tiene como significado "salio a la luz"';
      break;
    case 'eliel':
      answer = 'Tiene como signficiado el señor es mi Dios';
      break;
    case 'brian':
      answer = 'Tiene como significado "de gran fortaleza"';
      break;
    case 'eduardo':
      answer = 'Tiene como significado el guardian de la riqueza';
      break;
    case 'ariel':
      answer = 'Tiene como significado "el leon de Dios" o la "criatura de Dios"';
      break;
    case 'kevin':
      answer = 'Tiene como significado "de hermoso nacimiento"';
      break;
    case 'ignacio':
      answer = 'Tiene como significado "hombre que nacio en el fuego"';
      break;
    case 'marcelo':
      answer = 'Tiene como significado "Como el Martillo" es un nombre latin que hace referencia al dios Romano de la guerra';
      break;
    case 'pedro':
      answer = 'Nombre en latin que proviene de la palabra petrus que significa "piedra"';
      break;
    case 'mauricio':
      answer = 'Nombre que significa "gente del mar"';
      break;
    case 'francisco':
      answer = 'Nombre que significa  "El Frances"';
      break;
    case 'facundo':
      answer = 'El significado de este nombre es "El Elocuente"';
      break;
    case 'federico':
      answer = 'Tiene como significado "Principe de Paz"';
      break;
    case 'ivan':
      answer = 'Tiene como significado "Bendecido por Dios"';
      break;
      // NOMBRE MUJERES:
    case 'noelia':
      answer = 'Nombre que significa "armonia"';
      break;
    case 'micaela':
      answer = 'Nombre hebreo que significa "Dios es Justo"';
      break;
    case 'mariana':
      answer = 'Nombre hebreo que consiste de la union del nombre de Maria y de Ana que significa "la elegida llena de gracia"';
      break;
    case 'sofia':
      answer = 'Tiene como significado "sabiduria"';
      break;
    case 'maria':
      answer = 'Tiene como significado "eminente o excelsa"';
      break;
    case 'lucia':
      answer = 'Tiene como significado "mujer que nacio en el amanecer"';
      break;
    case 'catalina':
      asnwer ='Tiene como significado “inmaculada y pura”';
      break;
    case 'elena':
      answer = 'Tiene como significado birllante o "con resplandor"';
      break;
    case 'emilia':
      answer = 'Tiene como significado "la gran trabajadora"';
      break;
    case 'valentina':
      answer = 'Tiene como significado "fuerte y saludable"';
      break;
    case 'zoe':
      answer = 'tiene como significado "vida"';
      break;
    case 'carla':
      answer = 'Tiene como significado poderosa o "la que es fuerte"';
      break;
    default:
      answer = 'Hmm, no se encontro resultado para tu nombre';
      break;
  }
  return answer;
}
