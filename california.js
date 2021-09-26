"use strict";

var raceTitle = "California Congressional Elections";

var race = ["District 1", "District 2", "District 3", "District 4",
"District 5", "District 6", "District 7", "District 8", "District 9",
"District 10", "District 11", "District 12", "District 13", "District 14",
"District 15", "District 16", "District 17", "District 18", "District 19",
"District 20", "District 21", "District 22", "District 23", "District 24",
"District 25", "District 26", "District 27", "District 28", "District 29",
"District 30", "District 31", "District 32", "District 33", "District 34",
"District 35", "District 36", "District 37", "District 38", "District 39",
"District 40", "District 41", "District 42", "District 43", "District 44",
"District 45", "District 46", "District 47", "District 48", "District 49",
"District 50", "District 51", "District 52", "District 53"];
             
var candidate =
[
   ["LaMalfa, Doug", "Denney, Audrey", "No Third Party"],
   ["Huffman, Jared", "Mensing, Dale", "No Third Party"],
   ["Garamendi, John", "Hamilton, Tamika", "No Third Party"],
   ["McClintock, Tom", "Kennedy, Brynne", "No Third Party"],

   ["Thompson, Mike", "Giblin, Scott", "No Third Party"],
   ["Matsui, Doris", "Bish, Chris", "No Third Party"],
   ["Bera, Ami", "Patterson, Buzz", "No Third Party"],
   ["Obernolte, Jay", "Bubser, Christine", "No Third Party"],

   ["McNerney, Jerry", "Amador, Tony", "No Third Party"],
   ["Harder, Josh", "Howze, Ted", "No Third Party"],
   ["DeSaulnier, Mark", "Sharma, Nisha", "No Third Party"],
   ["Pelosi, Nancy", "Buttar, Shahid", "No Third Party"],

   ["Lee, Barbara", "Piterman, Nikka", "No Third Party"],
   ["Speier, Jackie", "Petel, Ran", "No Third Party"],
   ["Swalwell, Eric", "Hayden, Alison", "No Third Party"],
   ["Costa, Jim", "Cookingham, Kevin", "No Third Party"],

   ["Khanna, Ro", "Tandon, Ritesh", "No Third Party"],
   ["Eshoo, Anna", "Kumar, Rishi", "No Third Party"],
   ["Lofgren, Zoe", "Aguilera, Justin", "No Third Party"],
   ["Panetta, Jimmy", "Gorman, Jeff", "No Third Party"],

   ["Valadao, David", "Cox, TJ", "No Third Party"],
   ["Nunes, Devin", "Arballo, Phil", "No Third Party"],
   ["McCarthy, Kevin", "Mangone, Kim", "No Third Party"],
   ["Carbajal, Salud", "Caldwell, Andy", "No Third Party"],

   ["Garcia, Mike", "Smith, Christy", "No Third Party"],
   ["Brownley, Julia", "Baldwin-Kennedy, Ronda", "No Third Party"],
   ["Chu, Judy", "Nalbandian, Johnny", "No Third Party"],
   ["Schiff, Adam", "Early, Eric", "No Third Party"],

   ["Cardenas, Tony", "Duenas, Angelica", "No Third Party"],
   ["Sherman, Brad", "Reed, Mark", "No Third Party"],
   ["Aguilar, Pete", "Gibboney, Agnes", "No Third Party"],
   ["Napolitano, Grace", "Scott, Joshua", "No Third Party"],

   ["Lieu, Ted", "Bradley, James", "No Third Party"],
   ["Gomez, Jimmy", "Kim, David", "No Third Party"],
   ["Torres, Norma", "Cargile, Mike", "No Third Party"],
   ["Ruiz, Raul", "Cruz, Erin", "No Third Party"],

   ["Bass, Karen", "Webber, Errol", "No Third Party"],
   ["Sanchez, Linda", "Tolar, Michael", "No Third Party"],
   ["Kim, Young", "Cisneros, Gil", "No Third Party"],
   ["Roybal-Allard, Lucille", "Delgado, C Antonio", "No Third Party"],

   ["Takano, Mark", "Smith, Aja", "No Third Party"],
   ["Calvert, Ken", "O'Mara, William", "No Third Party"],
   ["Waters, Maxine", "Collins, Joe", "No Third Party"],
   ["Barragan, Nanette", "Joya, Analilia", "No Third Party"],

   ["Porter, Katie", "Raths, Greg", "No Third Party"],
   ["Correa, Lou", "Waters, James", "No Third Party"],
   ["Lowenthal, Alan", "Briscoe, John", "No Third Party"],
   ["Steel, Michelle", "Rouda, Harley", "No Third Party"],

   ["Levin, Mike", "Maryott, Brian", "No Third Party"],
   ["Issa, Darrell", "Campa-Najjar, Ammar", "No Third Party"],
   ["Vargas, Juan", "Hidalgo, Juan", "No Third Party"],
   ["Peters, Scott", "DeBello, Jim", "No Third Party"],
   ["Jacobs, Sara", "Gomez, Georgette", "No Third Party"]
  
];

var party =
[
   ["R", "D", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["R", "D", "I"],

   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["R", "D", "I"],

   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],

   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],

   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],

   ["R", "D", "I"],
   ["R", "D", "I"],
   ["R", "D", "I"],
   ["D", "R", "I"],

   ["R", "D", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],

   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],

   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],

   ["D", "R", "I"],
   ["D", "R", "I"],
   ["R", "D", "I"],
   ["D", "R", "I"],

   ["D", "R", "I"],
   ["R", "D", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],

   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["R", "D", "I"],

   ["D", "R", "I"],
   ["R", "D", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
   ["D", "R", "I"],
         
 ];
 
 var votes = 
 [
   [204190, 154073, 0],
   [294435, 94320,  0],
   [176043, 145945, 0],
   [247291, 194731, 0],

   [271233, 85227,  0],
   [229648, 83466,  0],
   [217416, 166549, 0],
   [158711, 124400, 0],

   [174252, 128358, 0],
   [166865, 135629, 0],
   [271063, 100293, 0],
   [281776, 81174,  0],

   [327863, 34955,  0],
   [278300, 72705,  0],
   [242991, 99710,  0],
   [128690, 88039,  0],

   [212137, 85199,  0],
   [217388, 126751, 0],
   [224385, 88642,  0],
   [236896, 71658,  0],

   [85928,  84406,  0],
   [170888, 144251, 0],
   [190222, 115896, 0],
   [212564, 149781, 0],

   [169638, 169305, 0],
   [208856, 135877, 0],
   [221411, 95907,  0],
   [244271, 91928,  0],

   [119420, 91524,  0],
   [240038, 105426, 0],
   [175315, 110735, 0],
   [172942, 86818,  0],

   [257094, 123334, 0],
   [108792, 96554,  0],
   [169405, 74941,  0],
   [185151, 121698, 0],

   [254916, 41705,  0],
   [190467, 65739,  0],
   [173946, 169837, 0],
   [135572, 50809,  0],

   [168126, 94447,  0],
   [210274, 157773, 0],
   [199210, 78688,  0],
   [139661, 66375,  0],

   [221843, 193096, 0],
   [157803, 71716,  0],
   [197028, 114371, 0],
   [201738, 193362, 0],

   [205349, 181157, 0],
   [195521, 166869, 0],
   [165596, 76841,  0],
   [244145, 152350, 0],
   [199244, 135614, 0]
    
 ];






