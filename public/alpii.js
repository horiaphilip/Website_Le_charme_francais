
document.addEventListener("DOMContentLoaded", () => {
    const changeRandomProperties = () => {
        const elements = document.querySelectorAll(".activity");
        elements.forEach(element => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            const randomFontSize = `${Math.floor(Math.random() * (24 - 16 + 1) + 16)}px`;
            element.style.color = randomColor;

        });
    };

    changeRandomProperties();
    setInterval(changeRandomProperties, 7000); 

    const highlightButtons = document.querySelectorAll('.highlight-btn');
    highlightButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const activityDiv = event.currentTarget.parentElement;
            activityDiv.classList.toggle('highlight'); 
            console.log('Target:', event.target); 
            console.log('Current Target:', event.currentTarget); 
        });
    });

    const description = document.querySelector(".description p");
    description.addEventListener("click", (event) => {
        const style = getComputedStyle(event.target);
        alert("Pentru mai multe detalii despre destinatie, completati email-ul in sectiunea de jos");
        event.stopPropagation();
    });

    document.querySelector(".destination").addEventListener("click", () => {
        alert("Pentru mai multe detalii despre destinatie, completati email-ul in sectiunea de jos");
    });
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
            alert("Adresa nu este valida!");
        } else {
            let emails = JSON.parse(localStorage.getItem("emails")) || [];
            if (emails.includes(email)) {
                alert("Email-ul a fost deja inregistrat.");
            } else {
                emails.push(email);
                localStorage.setItem("emails", JSON.stringify(emails));
                alert("Email-ul a fost inregistrat.");
            }
        }
    });
});
