// Conditional Statements
// 1.If Statement

let age = 20;
if(age >= 18)
{
    console.log("Eligible:")
    document.write("Eligible")
}
else{
    console.log("Not eligible")
}

// else if ladder

let marks = 85
if (marks >90){
    console.log("Grade A")
}
else if(marks >= 80)
{
    console.log("Grade B")
}
else if(marks >= 45)
{
    console.log("Grade C")
}
else{
    console.log("Fail !")
}

//4.switch statement
let day = 2
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday") ;
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;    
    default:
        console.log("invalid day")               
}

//for loop:
for (let i=0;i<=5;i++){
    console.log(i)
}

//print multiplication table of 7
//use templates literals

// for loop
let n = 7;
for(let i=1; i<=10;i++){
    // console.log('7*'+i+'='+i*7)
    console.log(`${n}x${i}=${n*i}`)
}

for(let j=5;j<=50;j++){
    if(j%2!=0){
        console.log(j)
    }
}

// factorial
let fact = 1;
for (let i=6;i>=1;i--){
    fact *=i
}
console.log(fact)


// Note: do while executes atleast 1 even 
// condion false
// while :
while(password != 23){
     password = prompt("Enetr password")
}

// break : Imediatly terminates the loop

for(let i = 1; i<= 10; i++){
    if(i == 5){
        break;
    }
}
console.log(i);

//do the sum of first numbers
let p  = Number(prompt("enter the number:"))
let total1 = 0
for (let i = 1;i<p;i++){
    total1= total1+i;
}
console.log(total1)