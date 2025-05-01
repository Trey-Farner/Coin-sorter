const challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']

// const multiplesOf50 = (number, count) => {
//     let multiples = []
//     for (let i = 1; i <= count; i++) {
//         multiples.push(number * i);
//     }
//     console.log(multiples)
// }

// console.log(multiplesOf50(50, ))


// for (let i = 0; pennies - i >= pennies / 50; i++) {
//     if (pennies / 50 === 0) {
//         pennyWrapper = pennies / 50
//         remainingPennies = i
//     } else {
//         console.log(`You have ${pennyWrapper} penny rolls with ${remainingPennies} left over`)
//     }
// };


//------------------------------------------------//


// let coins;
const coinSorter = (coins) => {
    let pennies = 0;
    let nickles = 0;
    let dimes = 0;
    let quarters = 0;

    for (let i = 0; i <= coins.length - 1; i++) {
        if (coins[i] === "penny") {
            pennies++
        } else if (coins[i] === "nickel") {
            nickles++
        } else if (coins[i] === "dime") {
            dimes++
        } else if (coins[i] === "quarter"){
            quarters++
        } else console.log("Please insert valid United States coin currency")
    }
    
    let remainingPennies = pennies % 50;
    let remainingNickles = nickles % 40;
    let remainingDimes = dimes % 50;
    let remainingQuarters = quarters % 40;
    let pennyWrapper = (pennies - remainingPennies) / 50;
    let nickleWrapper = (nickles - remainingNickles) / 40;
    let dimeWrapper = (dimes - remainingDimes) / 50;
    let quarterWrapper = (quarters - remainingQuarters) / 40;
    let total = (pennies * .01) + (nickles * .05) + (dimes * .1) + (quarters * .25);
    
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
}

coinSorter(challengeData)
//-----------------------------------------------------//

