import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const addButton = document.getElementById("my-button");
const addButton2 = document.getElementById("add-data");

addButton.addEventListener("click", function () {
  //const but = document.getElementById("but");
  //but.innerText = "Hello World";
  console.log("hello world");

  document.getElementById("hi").innerHTML = "My notebook";
});

addButton2.addEventListener("click", function () {
  const listNode = document.getElementById("lista");

  let liNode = document.createElement("li");

  liNode.appendChild(document.createTextNode("newelement"));

  listNode.appendChild(liNode);
});
