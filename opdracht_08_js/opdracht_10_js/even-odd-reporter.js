for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    const oddOrEven = function (i) {
        if (i % 2 == 0) {
            return i + " is even";
        }
        else {
            return i + " is odd";
        };
    };
    console.log(oddOrEven(i));
}


