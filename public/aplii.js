// alpii.js

document.addEventListener("DOMContentLoaded", () => {
    // Change random property values
    const changeRandomProperties = () => {
        const elements = document.querySelectorAll(".activity");
        elements.forEach(element => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            const randomFontSize = `${Math.floor(Math.random() * (24 - 16 + 1) + 16)}px`;
            element.style.color = randomColor;
            element.style.fontSize = randomFontSize;
        });
    };

    changeRandomProperties();
    setInterval(changeRandomProperties, 5000); // Change properties every 5 seconds

    // ClassList, target, currentTarget usage
    const navItems = document.querySelectorAll("nav ul li a");
    navItems.forEach(item => {
        item.addEventListener("mouseover", (event) => {
            event.target.classList.add("hover");
        });

        item.addEventListener("mouseout", (event) => {
            event.target.classList.remove("hover");
        });

        item.addEventListener("click", (event) => {
            event.preventDefault();
            alert(`Clicked on ${event.target.textContent}`);
        });
    });

    // getComputedStyle and stopPropagation usage
    const description = document.querySelector(".description p");
    description.addEventListener("click", (event) => {
        const style = getComputedStyle(event.target);
        alert(`Current font size is ${style.fontSize}`);
        event.stopPropagation();
    });

    document.querySelector(".destination").addEventListener("click", () => {
        alert("Clicked on destination section");
    });

    // Form validation
    const form = document.createElement("form");
    form.innerHTML = `
        <label for="email">Email:</label>
        <input type="text" id="email" name="email">
        <button type="submit">Submit</button>
    `;
    document.body.appendChild(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Email is valid.");
        }
    });
});
