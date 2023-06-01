// ---------------------- Aufgabe 1 ----------------------

// const testArr = ["String 1", "String 2", "String 3", "String 4"];
// console.log(testArr[testArr.length - 1]);

// oder 

// const testArr = ["String 1", "String 2", "String 3", "String 4"];
// console.log(testArr[3]);



//---------------------- Aufgabe 2 ----------------------
// var struc=
// {
//     level1:
//      {
//         level2:
//     {
//         param1:3.14,
//         param2:10.01
//     } 
//     }

// };

// console.log(struc.level1.level2.param1); 
// console.log(struc.level1.level2.param2); 

//---------------------- Aufgabe 3 ----------------------

/* 
1.nested Object
2.Im Zusammenhang mit der Entwicklung von Webseiten mit HTML/JS ---> DOM - Document Object Method - Struktur 
*/

//---------------------- Aufgabe 4 ----------------------


// "use strict";

// /*** Rechner */

// // 0. a+b | a-b --> Ergebnis c

// // Start App
// startApp()
// function startApp() {
// 	output(rechner(getNum(),getNum(),getOp()));
// }

// // Eingabe:
// function getNum() {
// 	return parseInt(prompt("Zahl?"));
// }

// function getOp() {
// 	return prompt("Operator?");
// }

// // Rechner
// function rechner(a,b,op) {

// 	switch (op) {
		
// 		case "+":
// 			return summe(a,b);
// 		case "-":
// 			return differenz(a,b);
// 	}
	
// }
// // Funktion ------

// function summe(a , b) {
// let c = a + b;	
// return a + b;	
// }


// function differenz(a , b) {
// let c = a - b;	
// return a - b;
// }


// // Output:
// function output(outputData) {
// 	console.log(outputData);
// }

//------------------------------------------------------------------------


//------------------------------ Aufgabe 5 --------------------------------

/* 
Der Code kompiliert nicht, weil in Java eine Klasse nur von einer einzigen anderen Klasse erben kann. 
Das Konzept der Mehrfachvererbung, bei dem eine Klasse von mehreren Klassen erbt, wird in Java nicht unterstützt.

In dem gegebenen Code wird versucht, von sowohl SuperClass1 als auch SuperClass2 zu erben, indem das extends-Schlüsselwort zweimal verwendet wird. 
Dies führt zu einem Kompilierungsfehler, da es gegen die Syntax und Semantik der Vererbung in Java verstößt.

Um dieses Problem zu lösen, könnte man stattdessen eine der beiden Superklassen als Schnittstelle (Interface) deklarieren und die andere als Superklasse verwenden. 
Java unterstützt die Implementierung von mehreren Schnittstellen, so dass die Funktionalität beider Klassen in der Testklasse genutzt werden kann


-----Die Klasse TestClass erbt nur die Eigenschaften und Methoden der SuperClass1. -----
*/

//------------------------------ Aufgabe 6 --------------------------------

// this ----> Instanzvariable  und Referenzvariable

//------------------------------ Aufgabe 7 --------------------------------

// public class Getset {
//     private int counter;

//     public int getCounter() {
//         return counter;
//     }

//     public void setCounter(int value) {
//         counter = value;
//     }
// }

//------------------------------ Aufgabe 8 --------------------------------

// public class Test;
// protected int counter;
// protected int age;
// private String familyName;
// private String firstName;
// public status boolean;


