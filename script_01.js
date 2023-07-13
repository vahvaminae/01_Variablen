"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
//console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/
// let firstName; // Deklaration (Definition) //let teilt dem Compiler mit, wenn man die Bezeichnung
//firstname verwendet, dann zeigt er an, dass man nur diesen Speicherbereich meint
// firstName = "Max"; //Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName;
// familyName = "Hauser";
// console.log(familyName);

/****03 Deklarationen & Wertzuweisungen II */

// let firstName, familyName;

// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");

// console.log(firstName,familyName); 
// console.log(firstName + " " + familyName); 

/* JS ist eine untypisierte Sprache! | untyped */
// let test;
// test ="Maxime";
// test =2;
// test = false;

// console.log("Datentypen: "+ typeof test);
// console.log("Inhalt: " + test);

// let firstName = "Max"; // Deklaration (Definition) + Werzuweisung //let teilt dem Compiler mit, wenn man die Bezeichnung
// //firstname verwendet, dann zeigt er an, dass man nur diesen Speicherbereich meint
// firstName = "Maxime";
// console.log(firstName); // Ausgabe

// const firstName; // variable mit konstanten Inhalt
// firstName = "Maxime";// keine neue zuweisung zur LZ möglich
// console.log(firstName); // Ausgabe

//Deklaration

// let ageJohn, ageMarc;
// const birthYearJohn = 2000;
// const birthYearMarc = 1990;

// let year = 2023;
// ageJohn = year - birthYearJohn
// ageMarc = year - birthYearMarc

// console.log("ageJohn: " + ageJohn)
// console.log("ageMarc: " + ageMarc)

let date = new Date();
let year = date.getFullYear();
// console.log(date);
console.log(year);

