const elementRef = document.getElementById("title-text");
// const elementRef = document.querySelectorAll("#title-text");

console.log(elementRef);
console.log(elementRef.innerHTML);

elementRef.innerText = "Updated";

const containerRef = document.getElementsByClassName("container");
console.log(containerRef[0].children);
// containerRef[0].children[1].innerHTML = "I am ";

let wrapperRef = document.getElementsByClassName("container");
console.log(wrapperRef[0]);

wrapperRef[0].addEventListener("click", (e) => {
  console.log("wrapper clicked");
  console.log(e.clientX);
  console.log(e.clientY);
});
wrapperRef[0].addEventListener("copy", (e) => {
  console.log("wrapper copied");
  console.log(e);
});
wrapperRef[0].addEventListener("mouseover", (e) => {
  console.log("Mouse Come Inside");
  //   console.log(e);
});
wrapperRef[0].addEventListener("mouseout", (e) => {
  console.log("Mouse Gone");
  //   console.log(e);
});

// Objects

let person = {
  name: "Zeeshan",
  address: "Lahore",
  playCricket: false,
};

console.log(person.name);

let books = [
  { name: "dd", dop: "12-44" },
  { name: "dd", dop: "12-44" },
  { name: "dd", dop: "12-44" },
];

console.log(books[1].dop);
