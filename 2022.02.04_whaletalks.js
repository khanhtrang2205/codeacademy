let input = 'To the well-organised mind, death is but the next great adventure.';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]){
        if (input[i] === "e"){
          resultArray.push("ee");
        } else if (input[i] === 'u'){
          resultArray.push("uu")
        } else {
        resultArray.push(input[i]);
      }
  }
}};

console.log (resultArray.join('').toUpperCase())
