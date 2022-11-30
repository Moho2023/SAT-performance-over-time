const fs = require("fs");

let scoresJSON = {};

let score_csv = fs.readFileSync('scores.csv', 'utf8');
let states = score_csv.split("\n");

states.forEach((state) => {
  let state_data = state.split(',');
  let currentState = state_data[0];
  let currentStateData = {};

  if(currentState != "State" && currentState != ""){


    currentStateData['2017total'] = state_data[1];
    currentStateData['2017r'] = state_data[2];
    currentStateData['2017m'] = state_data[3];
    currentStateData['2017pct'] = state_data[4];

    currentStateData['2018total'] = state_data[5];
    currentStateData['2018r'] = state_data[6];
    currentStateData['2018m'] = state_data[7];
    currentStateData['2018pct'] = state_data[8];

    currentStateData['2019total'] = state_data[9];
    currentStateData['2019r'] = state_data[10];
    currentStateData['2019m'] = state_data[11];
    currentStateData['2019pct'] = state_data[12];

    currentStateData['2020total'] = state_data[13];
    currentStateData['2020r'] = state_data[14];
    currentStateData['2020m'] = state_data[15];
    currentStateData['2020pct'] = state_data[16];
    currentStateData['Acronym'] = state_data[17];

    scoresJSON[currentState] = currentStateData;
  }
});

fs.writeFileSync('statescores.json', JSON.stringify(scoresJSON), 'utf8');
