const script = require('./mytetris.js');
script.initialize();
for (let i = 0; i < 500000; i++) script.update();
let store = script.getStore();
console.log(Object.keys(store).map( (index) => {if (store[index].archive) return store[index].archive.elites}));
//let result = script.getStore();
