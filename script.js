const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle");


      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");      
      });

const new_question = document.querySelector("#new_question");
const add_question = document.querySelector(".add-btn");
const list = document.querySelector(".list-of-questions ul");
add_question.addEventListener('click', (e) =>{
  if(new_question.value != ""){
    e.preventDefault();
    const myLi = document.createElement("li");
    myLi.innerHTML = new_question.value;
    list.append(myLi);

    const del = document.createElement("span");
    del.innerHTML = "x";
    myLi.appendChild(del);

  } 
})