export function fibo( num)  
{  
var n1 = 0; 
var n2 = 1;  
var temp;  
var i = 0;  
for (i = 0; i < num; i++)  
{  
temp = n1 + n2;  
n1 = n2; 
n2 = temp;  
}  
return n2;  
}  

export function factorial(number)
{
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}


else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}


else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return`The factorial of ${number} is ${fact}.`;
}
}
factorial(3);

export function add(x,y)
{
 return x-y;
}