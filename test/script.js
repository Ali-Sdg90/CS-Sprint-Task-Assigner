const input = "5 of 2.1 h";

const times = input.match(/\d+(\.\d+)?/g)?.map(Number);

console.log(times);

const availableTime = Math.trunc(times[0] - times[1]);

console.log(availableTime);
