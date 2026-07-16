console.log("Connected");

const colorBtn = document.getElementById("colorBtn");
const hiBtn = document.getElementById("hiBtn");

if (colorBtn) {
    colorBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        colorBtn.textContent = document.body.classList.contains("dark")
            ? "Light Mode"
            : "Dark Mode";
    });
}

if (hiBtn) {
    hiBtn.addEventListener("click", () => {
        alert("Hi there! Thanks for being here! ");
    });
}
// Every thing below gotten from: https://www.w3schools.com/js/default.asp //
const tagline = document.getElementById("tagline");

if (tagline) {
    const text = "I created a wonderful portfolio.";
    let index = 0;

    function typeTagline() {
        if (index < text.length) {
            tagline.textContent = text.slice(0, index + 1);
            index += 1;
            setTimeout(typeTagline, 70);
        }
    }

    typeTagline();
}

const projectList = document.getElementById("project-list");

if (projectList) {
    const projects = [
        {
            title: "Personal Portfolio Website",
            description: "I created this website to showcase my skills, projects, and interests in a clean layout.",
            tools: "HTML, CSS, JavaScript"
        },
        {
            title: "Python Practice",
            description: "I worked on Python exercises involving lists, loops, and user input.",
            tools: "Python, problem solving"
        },
        {
            title: "DOM and JavaScript Practice",
            description: "I practiced making web pages more interactive by working with buttons, events, and other changes in the browser.",
            tools: "JavaScript, DOM"
        }
    ];

    const countText = document.getElementById("project-count");

    if (countText) {
        countText.textContent = `${projects.length} featured projects`;
    }

    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "work-card";
        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p><strong>Skills used:</strong> ${project.tools}</p>
        `;
        projectList.appendChild(card);
    });
}
