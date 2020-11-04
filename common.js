const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = (function() {
  const getLineGen = (async function*() {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async message => {
    console.log(message);
    return (await getLineGen.next()).value;
  };
})();

module.exports = { prompt };
