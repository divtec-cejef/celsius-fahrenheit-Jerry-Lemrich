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

  const degreecel = prompt(`Température en celcius :` );
  alert(`${degreecel}C = ${degreecel *9/5 +32 }F`);

}()); // Main IIFE

