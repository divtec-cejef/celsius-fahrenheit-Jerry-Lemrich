/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Jerry Lemrich
 * @version 0.1
 * @since   2023-08-23
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let a = 'Bonjour';

  console.log(a);

function convertion(val1){
  return val1 * 9/5 +32;

}
  const degreecel = Number( prompt(`Température en celcius :` ) ); // entrez de la valeur
  alert(`${degreecel}C = ${convertion(degreecel)}F`); //convertion en fahrenheit

}()); // Main IIFE

