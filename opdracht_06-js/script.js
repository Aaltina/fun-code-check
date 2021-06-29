const vallueCheck = function (number){

    const compair = number> 100;
    if (number > 50) {
        return "True";
            }
    return "False"
        };

const result = vallueCheck (49)
   console.log (result);



const enterAllowd = function (age, crowdInside){

     if( age < 18){
        return "this club is for adults";
         }
       if  (crowdInside < 200){
            return "come in";
        }
        return "it's to bussy now, come back later";
} 
const result2 = enterAllowd(20, 201);
console.log (result2);



const averageCalculation = function (numbers){
const average = numbers.reduce((total, n) => total + n)/numbers.length;
console.log(average);
};
const solution1 = [23, 35, 16, 7, 21];
averageCalculation(solution1);
const solution2 = [10, 5, 7, 8, 9];
averageCalculation(solution2);

//a function that produce something
// didnt find a sollution to the return option....
