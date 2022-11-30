// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz=[]
  for( prop in objeto){
    matriz.push([prop, objeto[prop]])
  };
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj = {}
  for(let i=0; i<string.length; i++){
   let letra=string[i] 
   if(obj[letra]===undefined){
    obj[letra]=1
   } else{
    obj[letra]= obj[letra]+1
   }
  
}
   return obj ;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas= '';
  let minusculas= '';
  for (let i = 0; i<s.length; i++){
    if (s[i] === s[i].toUpperCase()) {
      mayusculas = mayusculas + s[i]
    }
    else{
      minusculas = minusculas + s[i]
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseArray = str.split(' ');
  for( var i=0; i<fraseArray.length; i++){
    var palabraArray= fraseArray[i].split('')
    var reversePalabra= palabraArray.reverse()
    fraseArray[i]= reversePalabra.join('')
  }
  return fraseArray.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let cadena= numero.toString();
  let cadenaInvertida= "";
  cadenaInvertida= cadena.split(""). reverse().join("");
  if(cadena===cadenaInvertida) {
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let cadena2 = ""
  for(let element of cadena){
    if(element !== "a" && element !== "b" && element !== "c"){
      cadena2= cadena2+element;
    }
    
  }
   return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

//   for(let i=0; i<arr.length; i++){
//     for( let j=i+1; j<arr.length; j++){
//       if(arr[j].length < arr[i].length){
//         var auxiliar= arr[j];
//         arr[j]=arr[i];
//         arr[i]=auxiliar;
//       }
//     }
//   }

// return arr;
var mayor= arr[0]
  for(let i=1; i<arr.length; i++){
    if (arr[i].length > mayor.length) {
      mayor = arr[i] // 9
    }
  }
nuevoArr = []
  for (let i = 0; i <= mayor.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[j].length === i) {  
        nuevoArr.push(arr[j]);
      }
    }
  }
  return nuevoArr;
  // ["You", "are", "beautiful", "looking"]
}
  


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArr=[];
  for( let i= 0; i<arreglo1.length; i++){
   for(let j = 0; j<arreglo2.length; j++){
     if(arreglo1[i] === arreglo2[j]){
    nuevoArr.push(arreglo1[i]);
  }
}
  }
  return nuevoArr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

