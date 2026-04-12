// Program Data for Our Project page
const programs = [
    {
        name: "Preschool",
        description: "A nurturing Montessori-inspired environment where children explore and learn through play and structured discovery.",
        icon: "🎨",
        image: "images/image1.jpg"
    },
    {
        name: "Primary School",
        description: "Engaging academic programs that emphasize values, critical thinking, and a deep connection with nature.",
        icon: "📚",
        image: "images/image6.png"
    },
    {
        name: "Nature & Environment",
        description: "Our 'Campestre' philosophy integrates outdoor learning and environmental stewardship into daily activities.",
        icon: "🌱",
        image: "images/image7.jpg"
    }
];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    updateFooter();
    setupNavigation();
    
    // Check which page we are on
    const programContainer = document.getElementById("program-cards");
    if (programContainer) {
        displayPrograms(programContainer);
    }
    
    const contactForm = document.getElementById("interest-form");
    if (contactForm) {
        setupFormHandling(contactForm);
    }
});

// Update Footer Information
function updateFooter() {
    const yearSpan = document.getElementById("current-year");
    const lastModifiedSpan = document.getElementById("last-modified");
    
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
}

// Mobile Navigation Toggle
function setupNavigation() {
    const menuButton = document.getElementById("menu-button");
    const navLinks = document.querySelector(".nav-links");
    
    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuButton.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
        });
    }
}

// Dynamically display programs using template literals
function displayPrograms(container) {
    container.innerHTML = programs.map(program => `
        <div class="card">
            <img src="${program.image}" alt="${program.name}" loading="lazy">
            <div class="card-content">
                <h3>${program.icon} ${program.name}</h3>
                <p>${program.description}</p>
            </div>
        </div>
    `).join('');
}

// Handle Form Submission and LocalStorage
function setupFormHandling(form) {
    const submissionCountDisplay = document.getElementById("submission-count");
    
    // Display submission count if it exists
    let count = parseInt(localStorage.getItem("formSubmissions")) || 0;
    if (submissionCountDisplay && count > 0) {
        submissionCountDisplay.textContent = `You have expressed interest ${count} time${count > 1 ? 's' : ''}. Thank you!`;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Increase count in localStorage
        count++;
        localStorage.setItem("formSubmissions", count);
        
        // Conditional branching for feedback
        let message = `Thank you for your interest, ${form.name.value}! We will contact you soon.`;
        if (count > 1) {
            message = `Welcome back, ${form.name.value}! Thank you for your continued interest in our school.`;
        }
        
        alert(message);
        form.reset();
        
        if (submissionCountDisplay) {
            submissionCountDisplay.textContent = `You have expressed interest ${count} time${count > 1 ? 's' : ''}. Thank you!`;
        }
    });
}
