const fs = require("fs");

let scoresJSON = {};

let score_csv = fs.readFileSync('scores.csv', 'utf8');
let states = score_csv.split("\n");

states.forEach((state) => {
  let state_data = state.split(',');
  let currentState = state_data[0];
  let currentStateData = {};

  if(currentState != "STATE"){
    currentStateData['2017'] = {};
    currentStateData['2018'] = {};
    currentStateData['2019'] = {};
    currentStateData['2020'] = {};

    currentStateData['2017']['total'] = state_data[1];
    currentStateData['2017']['r'] = state_data[2];
    currentStateData['2017']['m'] = state_data[3];
    currentStateData['2017']['pct'] = state_data[4];

    currentStateData['2018']['total'] = state_data[5];
    currentStateData['2018']['r'] = state_data[6];
    currentStateData['2018']['m'] = state_data[7];
    currentStateData['2018']['pct'] = state_data[8];

    currentStateData['2019']['total'] = state_data[9];
    currentStateData['2019']['r'] = state_data[10];
    currentStateData['2019']['m'] = state_data[11];
    currentStateData['2019']['pct'] = state_data[12];

    currentStateData['2020']['total'] = state_data[13];
    currentStateData['2020']['r'] = state_data[14];
    currentStateData['2020']['m'] = state_data[15];
    currentStateData['2020']['pct'] = state_data[16];

    scoresJSON[currentState] = currentStateData;
  }
});

fs.writeFileSync('statescores.json', JSON.stringify(scoresJSON), 'utf8');
