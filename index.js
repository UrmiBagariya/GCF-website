document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId && targetId !== "#" && targetId.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});


// =====================
// HERO BUTTON
// =====================
const joinBtn = document.querySelector(".hero button");

if (joinBtn) {
    joinBtn.addEventListener("click", () => {
        alert("Welcome to GCF Classes 🚀 Enrollment opening soon!");
    });
}


// =====================
// COURSE CARD CLICK (MAIN FEATURE)
// =====================
const cards = document.querySelectorAll(".card");
const contents = document.querySelectorAll(".course-content");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const course = card.getAttribute("data-course");

        // Remove active from all
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // Show selected
        const activeContent = document.getElementById(course);

        if (activeContent) {
            activeContent.classList.add("active");

            // Auto scroll to content
            activeContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =====================
// SCROLL ANIMATION
// =====================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".card, .feature").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =====================
// NAVBAR EFFECT + ACTIVE LINK
// =====================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    // Navbar background
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.7)";
    } else {
        nav.style.background = "rgba(255,255,255,0.05)";
    }

    // Active link highlight
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// =====================
// BACK TO TOP BUTTON
// =====================
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#06b6d4";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// =====================
// FORM VALIDATION
// =====================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "none";
            }
        });

        if (!valid) {
            e.preventDefault();
            alert("Please fill all fields!");
        }
    });
}


// =====================
// PAGE FADE-IN
// =====================
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.6s ease";