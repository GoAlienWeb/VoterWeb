"use strict";

var raceTitle = "Texas Congressional Elections";

var race = ["District 1", "District 2", "District 3", "District 4",
             "District 5", "District 6", "District 7", "District 8",
             "District 9", "District 10", "District 11", "District 12",
             
             "District 13", "District 14", "District 15", "District 16",
             "District 17", "District 18", "District 19", "District 20",
             "District 21", "District 22", "District 23", "District 24",
             
             "District 25", "District 26", "District 27", "District 28",
             "District 29", "District 30", "District 31", "District 32",
             "District 33", "District 34", "District 35", "District 36"
             ];
             
var candidate =
[
   ["Gohmert, Louie", "Gilbert, Hank", "Third Party"],
   ["Crenshaw, Dan", "Ladjevardian, Sima", "Scheirman, Elliott Robert"],
   ["Taylor, Van", "Seikaly, Lulu", "Claytor, Christopher"],
   ["Fallon, Pat", "Foster, Russell", "Antonelli, Lou"],
   ["Gooden, Lance", "Salter, Carolyn", "Hale, Kevin A."],
   ["Wright, Ron", "Daniel, Stephen", "Black, Melanie A."],
   ["Fletcher, Lizzie", "Hunt, Wesley", "Kelly, Shawn"],
   ["Brady, Kevin", "Hernandez, Elizabeth", "Duncan, Chris"],
   
   ["Green, Al", "Teague, Johnny", "Sosa, Jose R."],
   ["McCaul, Michael T.", "Siegel, Mike", "Eriksen, R"],
   ["Pfluger, August", "Hogg, Jon Mark", "Cody, Wacey Alpha"],
   ["Granger, Kay", "Welch, Lisa", "Holcomb, Trey"],
   ["Jackson, Ronny", "Trujillo, Gus", "Westbrook, Jack B."],
   ["Weber, Randy", "Bell, Adrienne", "Third Party"],
   ["Gonzales, Vicente", "De La Cruz-Hernandez, Monica", "Leone, Ross Lynn"],
   ["Escobar, Veronica", "Armendariz-Jackson, Irene", "Third Party"],
   
   ["Sessions, Pete", "Kennedy, Rick", "Brown, Ted"],
   ["Lee, Sheila Jackson", "Champion, Wendell", "Multiple Third Party Candidates"],
   ["Arrington, Jodey", "Watson, Tom", "Burnes, Joe"],
   ["Castro, Joaquin", "Garza, Mauro", "Blunt, Jeffrey"],
   ["Roy, Chip", "Davis, Wendy R.", "Multiple Third Party Candidates"],
   ["Nehls, Troy", "Kulkarni, Sri Preston", "LeBlanc Jr, Joseph"],
   ["Gonzales, Tony", "Jones, Gina Ortiz", "Villela, Beto"],
   ["Van Duyne, Beth", "Valenzuela, Candace", "Multiple Third Party Candidates"],
   
   ["Williams, Roger", "Oliver, Julie", "Kelsey, Bill"],
   ["Burgess, Michael C.", "Iannuzzi, Carol, H.", "Boler, Mark"],
   ["Cloud, Michael", "De La Fuente, Ricardo", "Gray, Phil"],
   ["Cuellar, Henry", "Whitten, Sandra", "Congdon, Bekah"],
   ["Garcia, Sylvia R.", "Blanco, Jaimy Z.", "Kurtz, Phil"],
   ["Johnson, Eddie Bernice", "Pennie, Tre", "Williams, Eric"],
   ["Carter, John", "Imam, Donna", "Patterson, Clark"],
   ["Allred, Colin", "Collins, Genevieve", "Multiple Third Party Candidates"],
   
   ["Veasey, Mark", "Vasquez, Fabian Cordova", "Multiple Third Party Candidates"],
   ["Vela, Filemon, B.", "Gonzales, Rey", "Multiple Third Party Candidates"],
   ["Doggett, Lloyd", "Sharon, Jenny Garcia", "Multiple Third Party Candidates"],
   ["Babin, Brian", "Lewis, Rashad", "Multiple Third Party Candidates"],
  
];

var party =
[
   ["R", "D", "I"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["D", "R", "L"],
   ["R", "D", "L"],
   
   ["D", "R", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "I"],
   ["D", "R", "L"],
   ["D", "R", "I"],
   
   ["R", "D", "L"],
   ["D", "R", "L"],
   ["R", "D", "L"],
   ["D", "R", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["R", "D", "L"],
   ["D", "R", "L"],
   ["D", "R", "L"],
   ["D", "R", "L"],
   ["R", "D", "L"],
   ["D", "R", "L"],
   
   ["D", "R", "L"],
   ["D", "R", "L"],
   ["D", "R", "L"],
   ["R", "D", "L"],

 ];
 
 var votes = 
 [
   [219726, 83016,  0],
   [192828, 148374, 5524],
   [230512, 179458, 8621],
   [253837, 76326,  6334],
   [173836, 100743, 5834],
   [179507, 149530, 10955],
   [159529, 149054, 5542],
   [277327, 97409,  7735],
   
   [172938, 49575,  6594],
   [217217, 187686, 8992],
   [232568, 53394,  5811],
   [233853, 121250, 11918],
   [217124, 50477,  5907],
   [190541, 118574, 0],
   [115605, 109017, 4295],
   [154108, 84006,  0],
   
   [171390, 125565, 9918],
   [180952, 58033,  7910],
   [198198, 60583,  6271],
   [175078, 89628,  6017],
   [235740, 205780, 12230],
   [210259, 181998, 15791],
   [149395, 137693, 8369],
   [167910, 163326, 12785],
   
   [220088, 165697, 7738],
   [261963, 161009, 9243],
   [172305, 95466,  5482],
   [137494, 91925,  6425],
   [111305, 42840,  2328],
   [204928, 48685,  10851],
   [212695, 176293, 8922],
   [178542, 157867, 7278],
   
   [105317, 39638, 12651],
   [111439, 84119, 5469],
   [176373, 80795, 12629],
   [222712, 73418, 6419],
    
 ];
























