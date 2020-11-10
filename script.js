//EX 1 DATO UN ARRAY DI OGGETTI STAMPA IN CONSOLE QUELLO CON IL PESO MINORE;
var bici = [
  {
    'nome' : 'mountain bike',
    'peso' : 500
  },
  {
    'nome' : 'bici da corsa',
    'peso' : 950
  },
  {
    'nome' : 'triciclo',
    'peso' : 800
  },
  {
    'nome' : 'tandem',
    'peso' : 125
  }
];

var pesoMin = bici[0];

for(i = 0 ; i < bici.length; i++){
  if(bici[i].peso < pesoMin.peso){
    pesoMin = bici[i];
  }
};

console.log(pesoMin.nome + ' è piu leggera con ' + pesoMin.peso + ' kg')

// DATO UN ARRAY CON DIVERSE SQUADRE CON PUNTI_FATTI E FALLI_SUBITI A 0 STAMPA IN CONSOLE LE SQUADRE CON NUMERI CASUALI;

var squadre = [
  {
    'nome' : 'juventus',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'milan',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'inter',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'lazio',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'napoli',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'roma',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'fiorentina',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'atalanta',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  }
];

function randomNum(max){
  var x = Math.floor(Math.random()* max) + 1 ;
  return x;
};

for(i=0;i<squadre.length;i++){
  squadre[i].punti_fatti = randomNum(99);
  squadre[i].falli_subiti = randomNum(99);
};

console.log(squadre);


// //EX 3 DATO UN ARRAY DI OGGETTI INIZIALE chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
var newArray = [];

var from = parseInt(prompt('insersci un numero'));
var to = parseInt(prompt('insersci un numero'));

for(i=(from-1) ; i < to ;i++){
  newArray.push(myArray[i])
};

console.log(newArray);

// dato un array di oggetti iniziale Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'}
];

function generateRandomChar(){
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var randomChar = alph[Math.floor(Math.random() * alph.length)];
  return randomChar;
};

var newObjArray=[];

for(i = 0 ; i < arrayObj.length; i++){
  var obj = {}
  for(key in arrayObj[i]){
    obj[key] = arrayObj[i][key];
  }
  obj.position = generateRandomChar()
  newObjArray.push(obj);
}

console.log(newObjArray);
