let promessa = Promise.resolve(4 + 8);

console.log('Algum código');

promessa.then((value) => console.log(`A soma é ${value}`));

// promessa.then((value) => console.log{ return value + 2}
// .then((value) => {console.log(value)});
