//creando mi función cipher
function cipher (str) {


    if(str === str.toUpperCase() || str === str.toLowerCase()) {

      var index1 = []; // [65, 66, 67]


      var indexAscii = []; //[72, 73, 74]


      var letters1 = []; // ['H', 'I', 'J']


     for(var i = 0; i < str.length; i++) {

      index1.push(str.charCodeAt(i));

     }


     for(var j = 0; j < index1.length; j++) {

      var ciphering = (index1[j] - 65 + 33) % 26 + 65;

       indexAscii.push(ciphering);


      }


     for(var k = 0; k < indexAscii.length; k++) {

      var alphabetLetters1 = String.fromCharCode(indexAscii[k]);

       letters1.push(alphabetLetters1);

      }

      var arrayToString1 = letters1.join('');


      return arrayToString1;

    }

}

//creando mi funcion decipher

function decipher (str) {

  if(str === str.toUpperCase() || str === str.toLowerCase()) {

    var index2 = []; // [72, 73, 74]


    var normalIndex = []; // [ 65, 66, 67 ]


    var letters2 = []; // ['A', 'B', 'C']


    for(var m = 0; m < str.length; m++) {

      index2.push(str.charCodeAt(m));

    }


    for(var n = 0; n < index2.length; n++) {

      var deciphering = (index2[n] + 65 - 33) % 26 + 65;

      normalIndex.push(deciphering);


    }


    for(var o = 0; o < normalIndex.length; o++) {

     var alphabetLetters2 = String.fromCharCode(normalIndex[o]);

      letters2.push(alphabetLetters2);

    }


    var arrayToString2 = letters2.join('');


    return arrayToString2;

  }
}

console.log(decipher('HIJ'));


//Preguntando al usuario

var phrase = prompt('Ingrese una frase');

function ask () {

  if(typeof(phrase) == 'string') {


    console.log(cipher(phrase));

    console.log(decipher(phrase));

  }

}

//console.log(cipher(phrase));
console.log(ask());
