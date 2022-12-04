const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle");


      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");      
      });

const add_btn = document.querySelector(".add-btn") 

const quiz_input = document.querySelector(".quiz-input")

function generate_field(){
  const title = document.createElement("input");
  title.type = "text";
  title.className = "input-title"
  title.placeholder = " Enter title of the quiz";

  const del_all = document.createElement("a");
  del_all.className ="delete_all";
  del_all.innerHTML ='<i class="fa-solid fa-xmark"></i>';


  const div_ = document.createElement("div");
  div_.className = "create-div";

  const add_question = document.createElement("button");
  add_question.type = "submit";
  add_question.innerHTML = "Add Question";
  add_question.className = "add-question-btn";

  const another_div = document.createElement("div");
  another_div.className = "another_div"

  function create_question(){
    const question_list = document.createElement("li");
    question_list.className = "question-list";

    const del = document.createElement("a");
    del.className = "delete";
    del.innerHTML = '<i class="fa-solid fa-square-xmark del"></i>';

    function delete_item(){
      this.parentElement.remove();
    }

    del.addEventListener("click", delete_item)


    const question_box = document.createElement("input");
    question_box.type = "text";
    question_box.className = "question_box"
    question_box.placeholder  = " Enter new question"

    div_.appendChild(question_list);
    question_list.appendChild(question_box);
    question_list.appendChild(del);
  }

  function remove_all(){
    this.parentElement.remove();
  }

  del_all.addEventListener("click", remove_all);

  quiz_input.appendChild(another_div);
  another_div.appendChild(div_)
  div_.appendChild(title);
  div_.appendChild(add_question);
  another_div.appendChild(del_all);  

  add_question.addEventListener("click", create_question)

}
add_btn.addEventListener("click", generate_field);




