"use strict";

// Declare variable named reportHTML containing the following HTML text <h1>title</h1>
var reportHTML = "<h1>" + raceTitle + "</h1>";

// Create a foor loop that loops through the contents of the race array
for (var i = 0; i < race.length; i++) {

  // Create a variable named totalVotes that will store the total votes cast in each race. Set it's value to 0.
  var totalVotes = 0;

  //Calculate the toal votes cast  in the current race by applying the forEach() method.
  votes[i].forEach(function (value) {
    calcSum(value);
  }
  );

  // Add the following HTML text to the value of the reportHTML variable to write the name of the current race in the program loop
  reportHTML += "<table>" + "<caption>" + race[i] + "</caption>" + "<tr><th>" + "Candidate" + "</th><th>" + "Votes" + "</th></tr>";
  reportHTML += candidateRows(i, totalVotes);
  reportHTML += "<table>"

}

//After the for loop has completed, write the value of the reportHTML variable into the innterHTML.

document.getElementsByTagName("section")[0].innerHTML = reportHTML;

/* Callback Function to calculate an array sum */
function calcSum(value) {
  totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
  return (100 * value / sum);
}

// Create candidateRows function to write individual table rows for each candidate, 
// showing the candidates name, party affiliation, vote total, and vote percentage.

function candidateRows(raceNum, totalVotes) {
  var rowHTML = "";
  for (var i = 0; i <= 2; i++) {
    var candidateName = candidate[raceNum][i];
    var candidateParty = party[raceNum][i];
    var candidateVotes = votes[raceNum][i];
    var candidatePercent = calcPercent(candidateVotes, totalVotes);

// Add the following HTML code to the value of the rowHTML variable 
// <tr>
// <td>name (party)</td>
// <td>votes (percent)</td>
// </tr>
    rowHTML += "<tr>" + "<td>" + candidateName + "(" + candidateParty + ")" + "</td>" + "<td>"
      + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + "%" + ")" + "</td>";

    for (var k = 0; k < candidatePercent.toFixed(0); k++) {
      rowHTML += createBar(candidateParty)
    }
    rowHTML += "</tr>";

  }
// Return the value of the rowHTML variable
  return rowHTML;
}

//Create a function named createBar() with one parameter named partyType
    function createBar(partyType) {

  var barHTML = "";

// Create a switch/case statement that tests the value of the partyType parameter.
  switch (partyType) {
    case "D":
      barHTML = "<td class='dem'></td>";
      break;
    case "R":
      barHTML = "<td class='rep'></td>";
      break;
    case "L":
      barHTML = "<td class='lib'></td>";
      break;

  }
  return barHTML;
}



































