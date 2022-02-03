// Hello
// 1. Write 3 variables (number, string, boolean)

let num = 1;
const name = "Joni";
let isHot = true;
console.log(isHot);

// 2. variables using (let, const)
let number = 7;
const nam = "Dipro"; // don't update
number = 5;

//3. Simple Math Operations( +, -, *, /, % )

let numberOne = 5;
let numberTwo = 3;

var add = numberOne + numberTwo;
console.log(add);

var sub  = numberOne - numberTwo;
console.log(sub);

var multiplication  = numberOne * numberTwo;
console.log(multiplication);

var division  = numberOne / numberTwo;
console.log(division);

var modulus  = numberOne % numberTwo;
console.log(modulus);

//4. comparison ()

var x = 3;
var y = 2;

if (x > y) {
    console.log("x is grater than y");
}

var x = 3;
var y = 4;
if (x < y) {
    console.log("x is less than y");
}

var x = 3;
var y = 3;
if (x == y) {
    console.log("x is eual to y");
}

var x = 3;
var y = 2;
if (x != y) {
    console.log("x is not eual to y");
}

var x = 3;
var y = 2;
if (x >= y) {
    console.log("x is grater or eual to y");
}

var x = 3;
var y = 4;
if (x <= y) {
    console.log("x is less or eual to y");
}

//  5. Two Condition:::
//         case 1: Fullfill both conditions
//         case 2: Fullfill at least one condition
 

var x = 7;
var y = 5;
var z = 4;

if (x > y && y > z) {
    console.log("Full Fill both conditon");
}
var x = 7;
var y = 5;
var z = 4;

if (x > y || y < z) {
    console.log("Full Fill al least one conditon");
}

// 6. if-else

var x = 7;
var y = 5;

if (x > y) {
    console.log("x is grater than y");
} else {
    console.log("x is less than y");
}

// 7.
// 7.1: Using while loop to display 7 to 19 all numbers.
// 7.2: Only display odd numbers including 7 to 19
    
var i = 7;
while (i <= 17) {
    console.log("Number is: ", i);
    i++;
}

    
var m = 7;
while (m <= 17) {
    if (m % 2 != 0) {
        console.log("Odd Number is: ", m);
    }
    m++;
}

// 8. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

var numbers = [2, 3, 4, 5, 6, 7];
for (let i = 0; i <= numbers.length; i++){
    let elements = numbers[i];
    console.log(elements);
}

numbers[3] = 66;
console.log(numbers);

numbers.push(77, 79);
console.log(numbers);

numbers.pop();
console.log(numbers);

// 9. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

var arrNumbers = [22, 33, 45, 63, 77, 98];

for (let i = 0; i <= arrNumbers.length; i++){
    var elements = arrNumbers[i];
    console.log(elements);
}
for (let element of arrNumbers) {
    console.log(element);
}

// 10. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

let arrNum = [70, 30, 80, 85, 90, 100];
for (let elements of arrNum) {
    if (elements > 80) {
        console.log(elements);
    }
}

// 11. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।


function multiplicationNumber(num1, num2, num3) {
    const result = num1 * num2 * num3;
    return result;
}
const finalResult = multiplicationNumber(2, 3, 4);
console.log(finalResult);

// 12. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

let person = {
    name: "Joni",
    age: 37,
    dept:"IT"
}
console.log(person);

person.age = 38;
console.log(person);
