var debug = { hello: 'world' };
var blob = new Blob([JSON.stringify(debug, null, 2)], { type: 'application/json' });
console.log('blob ->', blob);
console.log('blob properties =>', blob.size, blob.type);

