const input = document.querySelector(".input_control");
const inputIcon = document.querySelector(".box i");

inputIcon.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputIcon.classList == "fa-solid fa-eye") {
        inputIcon.classList = "fa-solid fa-eye-slash";
        input.setAttribute('type', 'text');
    }else{
        inputIcon.classList = "fa-solid fa-eye";
        input.setAttribute('type', 'password')
    }
})