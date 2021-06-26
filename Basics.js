// 2
console.log(" 2) To check if string input is numeric")

var val = 2345;
g = isNaN(val);
console.log(g);
if (g == false) {
    console.log("it is a number");
}
var val = "2345";
g = isNaN(val);
console.log(g);
if (g == false) {
    console.log("it is a number");
}
var val = "This is a string";
g = isNaN(val);
console.log(val + ' ' + g);
if (g == false) {
    console.log("it is a number");
}

// 3
console.log("3) convert a number to string and vice versa");
console.log("string to number using parseInt");
let string1 = "this is string";
let strTonum = parseInt(string1);
let type = typeof (strTonum);
console.log("type of" + strTonum + " is " + type);

console.log("number to string");
let number = 1500;
number += '';
let numbertype = typeof (number);
console.log("Type of numbertype::" + numbertype);

// 4
console.log("4) == and ===");
var value4 = "787";
var value5 = 787;

if (value4 == value5) {
    console.log("True since it  compares oly the values");
}
else {
    console.log("not same");
}
if (value4 === value5) {
    console.log("data types are same");
}
else {
    console.log("type is different");
}


// 5 
console.log("5) var and let");

//using var
for (var i = 0; i < 3; i++) {
    console.log("var inside " + i);
}
console.log("outside loop still accessed" + i);

//using let
for (let j = 0; j < 3; j++) {
    console.log("inside loop" + j);

}
// console.log("outside loop"+j);

// 6
console.log("6) storing date in variable");
const d = new Date();
console.log(d);

// 7
console.log("7) storing past date");
const today = new Date()
const yesterday = new Date(today)

yesterday.setDate(yesterday.getDate() - 1)

today.toDateString()
yesterday.toDateString()
console.log("Yesterday's date::" + yesterday);


// 8

console.log("8) Prefix er for even elements /dr for odd elements");
const username = ["Gordan Ramsay", "Harikrish", "Liya", "Shalini", "Nikhil"];
const alter = username.map((uname, idx) => {
    if (idx % 2 == 0) {
        return 'Er.' + uname;
    }
    else {
        return 'Dr.' + uname;
    }
}
);
for (let i = 0; i < alter.length; i++) {
    console.log(alter[i]);
}

// 9

console.log("9) append san for names starting with Dr");
const usernames = ["Gordan Ramsay", "Harikrish", "Liya", "Shalini", "Nikhil"];
const alters = usernames.map((unames, idx) => {
    if (idx % 2 == 0) {
        return 'Er.' + unames;
    }
    else {
        return 'Dr.' + unames;
    }
}
);

var formatted = [];
for (let i = 0; i < alters.length; i++) {
    if (alters[i].startsWith("Dr")) {
        console.log(alters[i] + "San");

    }
    else {
        console.log(alters[i]);
    }

}

// 10
console.log("10) Extract prime numbers");

const newArray = [23, 57, 93, 12, 5, 37, 84, 22, 10, 11];
const PrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
});
console.log("array::" + newArray);
console.log("Prime numbers in array::" + PrimeArray);

// 11
console.log("11) sort array based on name");
let students = [];

students[0] = { id: "a001", name: "helen", marks: 45, city: "Chennai" };
students[1] = { id: "a002", name: "harsh", marks: 30, city: "Madurai" };
students[2] = { id: "a003", name: "Caty", marks: 28, city: "Karur" };
students[3] = { id: "a004", name: "karen", marks: 65, city: "Chennai" };
students[4] = { id: "a005", name: "ashwin", marks: 75, city: "Chennai" };
students[5] = { id: "a006", name: "Ramya", marks: 45, city: "Banglore" };

students.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
students.forEach((e) => {
    console.log(`NAME: ${e.name} Stuednt id: ${e.id} Mark: ${e.marks} City: ${e.city}`);
});

// 12 
console.log("12) sort based on name and city");
console.log("sort based aon name");
let student = [];

student[0] = { id: "a001", name: "helen", marks: 45, city: "Chennai" };
student[1] = { id: "a002", name: "harsh", marks: 30, city: "Madurai" };
student[2] = { id: "a003", name: "Caty", marks: 28, city: "Karur" };
student[3] = { id: "a004", name: "karen", marks: 65, city: "Chennai" };
student[4] = { id: "a005", name: "ashwin", marks: 75, city: "Chennai" };
student[5] = { id: "a006", name: "Ramya", marks: 45, city: "Banglore" };

student.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
student.forEach((e) => {
    console.log(`NAME: ${e.name} Stuednt id: ${e.id} Mark: ${e.marks} City: ${e.city}`);
});
console.log("sort based on city");
student.sort((a, b) => {
    let fa = a.city.toLowerCase(),
        fb = b.city.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
student.forEach((e) => {
    console.log(`NAME: ${e.name} Stuednt id: ${e.id} Mark: ${e.marks} City: ${e.city}`);
});

// 13
console.log("remove stuednts who are not from chennai and banglore");


var result = student.filter(citysort => {
    return citysort.city == "Chennai" || citysort.city == "Banglore";
});

console.log(result);

//14
let Student = [];

Student[0] = { id: "a001", name: "helen", marks: 45, city: "Chennai" };
Student[1] = { id: "a002", name: "harsh", marks: 30, city: "Madurai" };
Student[2] = { id: "a003", name: "Caty", marks: 28, city: "Karur" };
Student[3] = { id: "a004", name: "karen", marks: 65, city: "Chennai" };
Student[4] = { id: "a005", name: "ashwin", marks: 75, city: "Chennai" };
Student[5] = { id: "a006", name: "Ramya", marks: 45, city: "Banglore" };
console.log("add 20 marks to all stuednts");

let addmarks = Student.map(addmarks => {
    let mar = addmarks.marks + 20;

    console.log(`NAME: ${addmarks.name} Stuednt id: ${addmarks.id} Mark: ${mar} City: ${addmarks.city}`);

});

// 15
console.log("add 20 marks to all stuednts and add 15 marks whose pincode is 600053");

let Students = [];

Students[0] = { id: "a001", name: "helen", marks: 45, city: "Chennai" ,pincode:600053};
Students[1] = { id: "a002", name: "harsh", marks: 30, city: "Madurai" ,pincode:620053};
Students[2] = { id: "a003", name: "Caty", marks: 28, city: "Karur",pincode:639003 };
Students[3] = { id: "a004", name: "karen", marks: 65, city: "Chennai",pincode:600053 };
Students[4] = { id: "a005", name: "ashwin", marks: 75, city: "Chennai",pincode:600014 };
Students[5] = { id: "a006", name: "Ramya", marks: 45, city: "Banglore",pincode:560002 };


let addmark = Students.map(addmarks => {

    let mar ;
    if(addmarks.pincode==600053)
    {
    mar=addmarks.marks + 35;
    }
    else
    {
        mar=addmarks.marks+20

    }
    
    console.log(`NAME: ${addmarks.name} Stuednt id: ${addmarks.id} Mark: ${mar} City: ${addmarks.city} Pincode: ${addmarks.pincode}`);

});

// 16
console.log("usage of const against array");

const employid=["dk0098","dk0065","dk0034","dk0076"];
//changing an element
employid[0]="nh7865";
//adding an element
employid.push("nk3456");
for(let i=0;i<employid.length;i++){
    console.log(employid[i]);
}

// 17

console.log("add,sub,mul using arrow functions");
let number1=406;
let number2=902;
const add=()=>number1+number2;
const sub=()=>number2-number1;
const mul=()=>number1*number2;
console.log("406+902===",add());
console.log("902-406===",sub());
console.log("406*902===",mul());

// 18
console.log("Higher order component");

function2=(v)=>v+"value";

const valhoc=(dataval,func)=>{
    let v=dataval +790;
    return func(v);
}
let resulthoc=valhoc(10,function2);
console.log(resulthoc);

// 19
console.log("19) Destructuring");
let dest = ["java", "javascript", "spring", "mongodb"];
[lang1, lang2, lang3] = dest;
console.log(lang1 + ' ' + lang2 + ' ' + lang3);

// 20
console.log("20) sum of values using spread");
function addfunc(...values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}
console.log(addfunc(1, 2, 3, 4, 5, 6));


// 21
console.log("21) spread operator with objects");

let employee1 = {
    emp1name: "Kritika",
    emp1id: 10078,
    emp1dept: "HR"
};

let employee2 = {
    emp2name: "harshini",
    emp2id: 10008,
    emp2dept: "dxt"
};

let employees = {
    ...employee1,
    ...employee2
};
employees.emp2dept = "Marketing";

console.log(employees);

// 22

console.log("Extending classes");


class Profile {


    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {


        return this.name;
    }

    getAge() {


        return this.age;
    }

    getClass() {
        return this;
    }
}


class Studnt extends Profile {


    constructor(name, age, skill) {

        super(name, age);
        this.skill = [...skill];
    }


    getDetails() {
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
        console.log("skills : " + this.skill);
    }
}

var student1 = new Studnt("Ankit", 24, ['Java', 'Python', 'PHP', 'JavaScript']);
student1.getDetails();

//23

export default class stringcls{
    static find(x)
    {
        var str="JavaScript is the programming language of the Web.";
        var n = str.search(x);
        console.log("position"+n);
    }
}

stringcls.find("is");


var k1 = {a: 1};
var k2 = {b: 2};

var map = new Map();
var wm = new WeakMap();

map.set(k1, 'k1');
wm.set(k2, 'k2');

k1 = null;
map.forEach(function (val, key) 
{
    console.log(key, val); 
});

k2 = null;
console.log(wm.get(k2));
