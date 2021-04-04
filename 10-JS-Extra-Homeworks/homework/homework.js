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
  var matriz = [];
  for (const key in objeto) {
    //matriz.push('["'+ key + '", ' + objeto[key] + ']');
    matriz.push([key,objeto[key]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objConte = {};
  const alfa = "abcdfghijklmnopqrstuvwxyz";
  var cont;
  for(var i=0; i < alfa.length; i++){
    cont = 0;
    for(var j=0; j < string.length; j++){
      if( alfa[i] === string[j]){
        cont++;
      }
    }
    if(cont > 0){
      objConte[alfa[i]] = cont;
    }
  }
  return objConte;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //var j = s.length;
  //s = new String(s);
  var my = "";
  var mn = "";
  for (let i = 0; i < s.length ; i++) {
    //j--;
    if (s[i] >= 'A' && s[i] <= 'Z'){
      //s.unshift(s.pop());
      //j++;
      my += s[i];
    } else{
      mn += s[i];
    }
  }
  return my + mn;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var cont=0;
  var fraI = "";
  str += " ";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      cont++;
    } else {
      for (let j = i-1; j >= i - cont; j--) {
        fraI += str[j];
      }
      if (i < str.length - 1) {
        fraI += " ";
      }
      cont =0;
    }    
  }
  return fraI;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  var nin = "";
  for (let i = num.length -1; i >= 0; i--) {
    nin += num[i];
  }
  if (num === nin) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  var fra = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      fra += cadena[i];
    }    
  }
  return fra;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var tem = "";
  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i].length > arr[i+1].length) {
      tem = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = tem;
      i=0;
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arr3 = [];
  for (let i1 = 0; i1 < arreglo1.length; i1++) {
    for (let i2 = 0; i2 < arreglo2.length; i2++) {
      if (arreglo1[i1] === arreglo2[i2]) {
        arr3.push(arreglo1[i1])        
      }
    }    
  }
  return arr3;
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

