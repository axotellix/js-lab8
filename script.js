
/* [ TASK 1 > Sheep counting ] */
let c = 0;
let n = 5;
//let n = prompt('Введите кол-во овец:');

if(n > 100) {
    console.log('Вы спать вообще собираетесь?')
} else {
    // start > counting
    console.group('Задание 1. Считаем овец');

    for(let i = 1; i <= n; i++) {
        console.log(`${i} овечка`);
    }

    console.groupEnd();
    console.log('\n');
}


/* [ TASK 2 > Even / Odd ] */
let i = 0;

// start > iterating through 0-15
console.group('Задание 2. Четное / нечетное');
while(i < 16) {
    let even = !Boolean(i % 2);
    console.log(`${i} - ${even ? 'четное' : 'нечетное'}`);
    i++;
}

console.groupEnd();
console.log('\n');


/* [ TASK 3 > Chess board ] */
let x = 1;
let even = false;

// start > drawing rows
console.group('Задание 3. Шахматная доска');
do {
    switch(even) {
        case false:
            console.log(' # # # #');
        case true:
            console.log('# # # # ');
    }
    
    x++;
} while(x < 9)

console.groupEnd();
console.log('\n');


