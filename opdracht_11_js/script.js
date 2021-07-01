const color = ["yellow", "blue", "red", "orange"];
let i = 0;
while (color[i]) {
    console.log(color[i]);
    i++;
}


const color2 = ["yellow", "blue", "red", "orange"];
let x = 0;
let text = "";
for (; color2[x];) {
    console.log(color[x]);
    x++;
}


const array1 = ["yellow", "blue", "red", "orange"];
array1.forEach(element => console.log(element));


//While loop and for loop both 6 lines
//forEach, 2 lines
//Array is leesbaarder, minder stappen en compact
//Nee, je loopt door de properties, de lijst is eindig. 