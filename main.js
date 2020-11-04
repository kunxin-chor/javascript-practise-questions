const { prompt } = require("./common");

async function main() {
  let n = await prompt("Enter a number");
  console.log(n);
}
main();