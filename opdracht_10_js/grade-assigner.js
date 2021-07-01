for (let score = 60; score <= 100; score++) {

    function assignGrade(score) {
        if (score > 90) {
            return "For scoring " + score + " ,you get an A";
        } else if (score > 80) {
            return "For scoring " + score + " ,you get a B";
        } else if (score > 70) {
            return "For scoring " + score + " ,you get a C";
        } else if (score > 65) {
            return "For scoring " + score + " ,you get a D";
        } else {
            return "For soring " + score + " ,you get a E";
        }
    }
    console.log(assignGrade(score))
}




