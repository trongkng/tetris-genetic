const script = require('./mytetris.js');
script.initialize();
for (let i = 0; i < 20000; i++) script.update();
let result = script.getStore();
console.log(result);
console.log(result['4'])
for (let i = 0; i < 20000; i++) script.update();
