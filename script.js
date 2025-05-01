document.addEventListener("DOMContentLoaded", () => {
    // Button click event
    document.getElementById("interactive-button").addEventListener("click", () => {
        alert("Button Clicked!");
    });

    // Hover effect
    document.getElementById("interactive-button").addEventListener("mouseover", () => {
        console.log("Button hovered!");
    });

    // Keypress detection
    document.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // Secret action for double-click
    document.getElementById("interactive-button").addEventListener("dblclick", () => {
        alert("Secret action triggered!");
    });

    // Tab navigation
    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".tab-content").forEach(content => content.style.display = "none");
            document.getElementById(`tab-${button.dataset.tab}`).style.display = "block";
        });
    });

    // Form validation
    document.getElementById("user-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email.includes("@")) {
            alert("Invalid email format!");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long!");
            return;
        }

        alert("Form submitted successfully!");
    });
});
