// Arrays

// let num1="Ali"
// let num2="Zeee"
// let num3="Kashif"
// let num4="li"
// let num4="li"
// let num4="li"
// let num4="li"
// let num4="li"
// let num4="li"
// let num4="li"
// let num4="li"
// let num4="li"
// let num4="li"
// let num4="li"

let names = [
  "Ali",
  "Kashif",
  "Zeeshan",
  "Ali",
  "Zeeshan",
  "fd",
  1,
  2,
  3,
  3,
  4,
  5,
  5,
];
console.log(names[2]);

console.log(names.length);

// IN Last Add
names.push("Khan");
// IN Start Add
names.unshift([3, 3, 4]);
console.log(names);

// Remove Last
names.pop();
// Remove First
names.shift();

// // Remove Specific Element
// names.splice(3, 1);

let isThere = names.includes("Zaheer");
console.log(isThere);

names.reverse();
console.log(names);

console.log(names.lastIndexOf("Zeeshan"));

const twoDim = [
  [3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 8, 8],
  ["D", 4, 5, 6],
];

console.log(twoDim[2][3]);

// 3D Array
const threeDim = [
  [
    [3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 8, 8],
    ["D", 4, 5, 6],
  ],
  [
    [3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 8, 8],
    ["D", 4, 5, 6],
  ],
  [
    [3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 8, 8],
    ["D", 4, 5, 6],
  ],
];

console.log(threeDim[1][2][0]);

// Callback Funtions
function sayGreet(callBack) {
  callBack("3");
  callBack("2");
  callBack("Z");
}

sayGreet(() => {
  console.log("Hi From Callback");
});

console.log(names.length);

// Dynamic Index Number
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  //   console.log(i);
}

let names1 = ["Ali", "Kashif", "Zeeshan", "Ali", "Zeeshan", "fd"];

// Map
names1.map((abcd) => {
  console.log(abcd);
});



