const text_feild = document.getElementById("user-input");
const btn = document.getElementById("enter");
const ul = document.querySelector("ul");

//Checking if our input area is empty or not
function inputLength() {
  return text_feild.value.length;
}

//Our function to create list
function create_list() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(text_feild.value));
  ul.appendChild(li);
  text_feild.value = "";

  //line through function
  li.addEventListener("click", () => {
    li.className = "done";
  });
}

//Event listenrer on button
btn.addEventListener("click", () => {
  if (inputLength() > 0) {
    create_list();
  }
});

//Event listenr on textfied
text_feild.addEventListener("keypress", (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    create_list();
  }
});
