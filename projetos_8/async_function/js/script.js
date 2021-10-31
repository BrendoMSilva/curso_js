async function somar(a,b) {
    return a + b;
}

somar(3, 3).then(function(value) {
    console.log(value);
});

// somar(3, 3).then(value => {console.log(value));