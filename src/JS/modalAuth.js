



const user = document.querySelector(".user");
const userModal = document.querySelector(".user-modal")

user.addEventListener("click", () => {
    if (userModal.classList.contains("show")) {
        userModal.classList.remove("show")
    }
    else {
        userModal.classList.add("show")
    }
})


// window.onclick = function(event) {
//     if(!event.target.matches(".user") ) {
//         userModal.classList.remove("show") ;
//     }
//  }


