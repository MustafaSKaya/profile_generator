const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  let name = answer;
  rl.question("What\'s an activity you like doing? ", (answer) => {
    let hobby = answer;
    rl.question("What type of music you listen to mostly? ", (answer) => {
      let favouriteMusic = answer;
      rl.question("Which food is your favourite? ", (answer) => {
        let favouriteFood = answer;
        rl.question("Which sport is your absolute favourite? ", (answer) => {
          let faveSport = answer;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
            let superpower = answer;
            console.log(`Your are ${name}. You enjoy ${hobby}, and you like listening to ${favouriteMusic} music. ${favouriteFood} is your favorite and you like ${faveSport}. You have skills but ${superpower} is definitely not your superpower.`);
            rl.close();
          });
        });
      });
    });
  });
});

/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/