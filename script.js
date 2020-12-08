
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


/* [ TASK 4 > Sort numbers ] */
let nums = [5, 2, 7];

console.group('Задание 4. Сортировка чисел');

// print > initial array
let arr_str = '';
for(let i = 0; i < nums.length; i++) {
    arr_str += nums[i] + ' ';
}
console.log(arr_str);

// sort > initial array
for(let i = 0; i < nums.length; i++) {
    for(let j = nums.length; j >= i + 1; j--) {
       if(nums[j - 1] > nums[j]) {
           let t = nums[j];
           nums[j] = nums[j - 1];
           nums[j - 1] = t;
       } 
    }
}

// print > new array
arr_str = '';
for(let i = 0; i < nums.length; i++) {
    arr_str += nums[i] + ' ';
}
console.log(arr_str);

console.groupEnd();
console.log('\n');


/* [ TASK 5 > Max number ] */
let nums2 = [5, 2, 7, -3, 0];
let max = nums2[0];

console.group('Задание 5. Максимальное значение');

// print > initial array
let arr2_str = '';
for(let i = 0; i < nums2.length; i++) {
    arr2_str += nums2[i] + ' ';
}
console.log(arr2_str);

// find > max value
for(let i = 0; i < nums2.length; i++) {
    if(max < nums2[i]) max = nums2[i];
}

// print > max value
console.log(max);

console.groupEnd();
console.log('\n');
