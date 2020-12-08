
/* [ TASK 1 > Sheep counting ] */
let c = 0;
let n = prompt('Введите кол-во овец:');

if(n > 100) {
    console.log('Вы спать вообще собираетесь?')
} else {
    // start > counting
    console.group('Задание 1. Считаем овец');

    for(let i = 1; i <= n; i++) {
        console.log(`${i} овечка`);
    }

    console.groupEnd();
}




