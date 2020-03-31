let raceNumber = Math.floor(Math.random()*1000);

let runnerAge = 18;

let registerEarly = false;

if (registerEarly && runnerAge > 18) {
  raceNumber += 1000;  
}

if (registerEarly && runnerAge > 18) {
  console.log(`Race will begin at 9:30, your race number is: ${raceNumber}`);
}
else if (!registerEarly && runnerAge > 18 ) {
  console.log(`Race will begin at 11:00, your race number is: ${raceNumber}`);
}

if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration), your raceNumber is: ${raceNumber}`);
}

if (runnerAge === 18) {
  console.log(`Please contact with registration desk`);
}