console.log("Hello from JavaScript! 🚀");

// Change the greeting after the page loads
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");

    title.addEventListener("click", () => {
        title.textContent = "You clicked me! 🎉";
    });
});
