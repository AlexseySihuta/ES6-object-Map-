// forEach

// let arr = [5, 6, 7, 8, 9];
// let sum = 0;
// arr.forEach((e) => sum += e)
// console.log(sum)


// map

// let arr = [5, 6, 7, 8, 9];
// let resualt = arr.map(e => e**2)
// console.log(resualt)


// every and some

// let arr = [
//     { name: 'Ivan', country: 'Ukraine' },
//     { name: 'Petro', country: 'Ukraine' },
//     { name: 'Miguel', country: 'Cuba' }
// ]
// let resualtEvery = arr.every(e => e.country.toLowerCase() == 'ukraine')
// console.log(resualtEvery);

// let resualtSome = arr.some(e => e.country.toLowerCase() == "cuba")
// console.log(resualtSome)


// filter 

// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// let resualt = arr.filter(Array.isArray)
// console.log(resualt);


// reduce 
// до нуля

// let arr = [1, 2, 5, 0, 4, 5, 6];
// let c = 0;

// let t = 0;
// let resualt = arr.reduce((a, b) => {
//     c += b
//     if (b == 0) {
//         t += c
//         console.log(`сумма елементів до нуля = `+t);
//     }
// }, 0)

// для суми 10

// let d = 0;
// let resualt = arr.reduce((a, b) => {
//     if(d < 10) {
//         d += b
//         c++
//     }
// }, 0)
// console.log(`кількість елементів спочатку для суми 10 = `+ c)



// любим

// let arr = [1, -2, 3, 0, 4, -5, 6, -11];

// let re = arr.map(e => {
//     if(e >= 0) {
//         return e**2
//     }
// })
// let resualt = re.filter(e => e)
// console.log(resualt);