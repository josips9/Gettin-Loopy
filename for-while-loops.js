const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Josip Subašić';

const josip = {
    name: 'josip',
    age: 25,
    cool: true,
}

// For

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for(let i = 100; <= 120; i = +=2) {
//     console.log(i);
// }

for(let i = 0; i < numbers.length; i++) {
    console.log(i);
}

// For of
for(const letter of name) {
    console.log(letter);
}

for(const number of numbers) {
    console.log(number)
}

// For in - used for looping over keys of an object
for(const prop in josip) {
    console.log(josip);
}

const HumanStats = {
    feet: 2,
    arms: 2,
    eyes: 2,
    head: 1
};

function Human(name) {
    this.name = name;
}

Human.prototype = HumanStats;

const josip2 = new Human('josip')

console.log(Object.entries(josip2));

for(const prop in josip2) {
    console.log(prop);
}

// While Loop
let cool = true;
let i = 1;
while(cool === true) {
    console.log('You are cool');
    i++;
    if(i > 100) {
        cool = false;
    }
}
