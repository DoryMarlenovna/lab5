const button = document.getElementById("btn");
var count = 0;

button.addEventListener("click", function() {
    count++;
    button.textContent = count;
});