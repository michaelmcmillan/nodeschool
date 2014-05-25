var sum = 0;
process.argv.slice(2).forEach(function (arg) {
    sum += parseInt(arg);
});

console.log(sum);
