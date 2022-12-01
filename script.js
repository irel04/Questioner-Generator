const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".chevron");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });