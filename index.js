const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
     // Change icon based on mode
     if (body.classList.contains("dark-mode")) {
        toggleTheme.classList.remove("fa-moon");
        toggleTheme.classList.add("fa-sun");
    } else {
        toggleTheme.classList.remove("fa-sun");
        toggleTheme.classList.add("fa-moon");
    }
});