function calculation1(numbera, numberb) {
    const numberaSquared = numbera * numbera;
    const numberbSquared = numberb * numberb;
    const addedSquared = numberaSquared + numberbSquared;
    const squaredAgain = addedSquared * addedSquared;
    return squaredAgain;
}
console.log(calculation1(3, 4));





const calculation2 = function (numberA, numberB) {
    const numberASquared = numberA * numberA;
    const numberBSquared = numberB * numberB;
    const squaredAdded = numberASquared + numberBSquared;
    const againSquared = squaredAdded * squaredAdded;
    return againSquared;
};
console.log(calculation2(3, 4));




const calculation3 = () => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const addedSquar = number1Squared + number2Squared;
    const squarAgain = addedSquar * addedSquar
    return squarAgain;
}
console.log(calculation1(3, 4))