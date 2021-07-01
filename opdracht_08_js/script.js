/*const ageCheck = function(age) {
    console.log("entering ageCheck");
    console.log ("input " + age);
    if(age >= 18){
        return true;
    };
    {
        return false;
    }
    };
    //console.log(ageCheck(14));

const greeting = function (age) {
    console.log("entering greeting");
    console.log("Inpute "+ age);
    const whatAge = ageCheck(age);
    //return whatAge; het werkt
       if (whatAge == true){
        console.log ("Hello there");
    };
   if (whatAge == false){
       console.log ("Hey kiddo");
}
    };
   console.log (greeting(60)); */

// berekening VAT

const productGroup = function (product, prise) {
    if ((product == "food")) {
        const vat = prise * 0.09;
    }
    else {
        const vat = prise * 0.21;
    };
    return vat;
}
console.log(productGroup("food", 100));

const priseVatIncluded = function (prise) {

    const vatAdded = productGroup(product, prise);
    return prise + vatAdded;
    ;
}

// ik loop heel erg vast, ga aan de hand van het voorbeeld/de oplossing kijken waar ik de mist in ga
