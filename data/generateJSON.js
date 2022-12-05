const fs = require("fs");

let scoresJSON = {};

let score_csv = fs.readFileSync('scores.csv', 'utf8');
let states = score_csv.split("\n");

states.forEach((state) => {
  let state_data = state.split(',');
  let currentState = state_data[0];
  let currentStateData = {};

  if(currentState != "State" && currentState != ""){


    currentStateData['total2017'] = state_data[1];
    currentStateData['r2017'] = state_data[2];
    currentStateData['m2017'] = state_data[3];
    currentStateData['pct2017'] = state_data[4];

    currentStateData['total2018'] = state_data[5];
    currentStateData['r2018'] = state_data[6];
    currentStateData['m2018'] = state_data[7];
    currentStateData['pct2018'] = state_data[8];

    currentStateData['total2019'] = state_data[9];
    currentStateData['r2019'] = state_data[10];
    currentStateData['m2019'] = state_data[11];
    currentStateData['pct2019'] = state_data[12];

    currentStateData['total2020'] = state_data[13];
    currentStateData['r2020'] = state_data[14];
    currentStateData['m2020'] = state_data[15];
    currentStateData['pct2020'] = state_data[16];
    currentStateData['acronym'] = state_data[17];
    currentStateData['statelink'] = state_data[17]+".html";

    scoresJSON[currentState] = currentStateData;
  }
});

fs.writeFileSync('statescores.json', JSON.stringify(scoresJSON), 'utf8');
