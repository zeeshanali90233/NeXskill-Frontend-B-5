if (28 > 30) {
  console.log("28 is greater than 30");
}

// Outputs: 28 is greater than 30

if (30 <= 1000) {
  console.log("30 is less than or equal to 1000");
}

// Outputs: 30 is less than or equal to 1000

// 28 > 30 and 30<= 1000

// and: &&
// or: ||
// not: !

// a && b => if both equation are true
// a || b => if any of the equations is true
// !a => result of a in terms of true or false will be altered means, true will be false and
// false will be true

let age = 16;

if (age >= 30) {
  if (age <= 60) {
    console.log("Adult");
  }
}

if (age >= 30 && age <= 60 && age >= 0) {
  console.log("Age is between 30 and 60 inclusive");
}

let incomeStatus = "Retired";
// Salaried
// Retired
// Pensioned
// Expired
// .....

if (incomeStatus == "Salaried" || incomeStatus == "Retired") {
  console.log("Income Status: Salaried or Retired");
}

// If user has done BS or MS then alert him "Congrats you are qualified"

// Age is between 18 to 50  or he/she is retired

// 16 , Retired

const qualification = "BS";
console.log(qualification);

// Hoisting
// Hoisting is a feature in JavaScript where variables and functions are moved to the top of their scope

if ((age > 18 && age < 50) || incomeStatus == "Retired") {
  console.log("Congrats you are qualified");
  console.log(qualification);
}

const likesPlayingCricket = true;

if (!likesPlayingCricket) {
  console.log("You don't like playing cricket and you are not pakistani");
}

const isFreezed = true;

if (!isFreezed) {
  console.log("You are not freezed and ready to go for payment module");
}

// if user is not pakistani then disallow him/her to playing cricket

// let var const

// let myage
// var status
// const pi

// let
// Block Scope

try {
  console.log("1");
  let laptopName = "Dell";
  console.log("2");
  console.log(laptopName);
  console.log("3");

  console.log("Code Runned Successfully");
} catch (err) {
  console.error(err.message);
  alert(err.message);
}

async function getPosts() {
  try {
    const response = await axios.get(
      "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts"
    );
    console.log(response.status);
    const data = response.data;
    const tweets = data.tweets;

    const tweetsDivRef = document.querySelector(".tweets");
    tweets.map((tw) => {
      tweetsDivRef.innerHTML =
        tweetsDivRef.innerHTML +
        `<div class="tweet">
                <img src="${tw.tweetImage}" alt="Profile Pic" />
                <h3>${tw.tweetId}</h3>
                <p>${tw.tweetDescription}</p>`;
    });
  } catch (err) {
    console.log(err);
    alert("Something went wrong ");
  }
}

async function name() {
  try {
  } catch (err) {
    console.log(err);
  }
}








// =============
// CSS
// =============