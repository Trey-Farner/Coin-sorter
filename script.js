const pennies = 120;
const nickles = 0;
const dimes = 540;
const quarters = 0;
let remainingPennies = pennies % 50;
let remainingNickles = nickles % 50;
let remainingDimes = dimes % 50;
let remainingQuarters = quarters % 50;
let pennyWrapper = (pennies - remainingPennies) / 50;
let nickleWrapper = (nickles - remainingNickles) / 40;
let dimeWrapper = (dimes - remainingDimes) / 50;
let quarterWrapper = (quarters - remainingQuarters) / 40;
let total = (pennies * .01) + (nickles * .05) + (dimes * .1) + (quarters * .25)


// for (let i = 0; pennies - i >= pennies / 50; i++) {
//     if (pennies / 50 === 0) {
//         pennyWrapper = pennies / 50
//         remainingPennies = i
//     } else {
//         console.log(`You have ${pennyWrapper} penny rolls with ${remainingPennies} left over`)
//     }
// };
if (pennies > 0) {
    console.log(`Out of ${pennies} pennies, you have ${pennyWrapper} penny rolls with ${remainingPennies} left over`)
};

if (nickles > 0) {
    console.log(`Out of ${nickles} nickles, you have ${nickleWrapper} nickle rolls with ${remainingNickles} left over`)
}

if (dimes > 0) {
    console.log(`Out of ${dimes} dimes, you have ${dimeWrapper} dime rolls with ${remainingDimes} left over`)
}

if (quarters > 0) {
    console.log(`Out of ${quarters} quarters, you have ${quarterWrapper} quarter rolls with ${remainingQuarters} left over`)
}
console.log(`You have ${total} dollars`)