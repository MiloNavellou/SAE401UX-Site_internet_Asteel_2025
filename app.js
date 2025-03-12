// Autor: O'Com
// Date: 2025-02-25
// Version: 1.0
// Description: JS file for the project

function scrollToSection() {
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    cursor.textContent = "Voir";
    cursor.style.display = "none";
    document.body.appendChild(cursor);

    const targetImage = document.querySelector(".custom-image-intro");

    if (targetImage) {
        // Suivre la souris
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Afficher le curseur personnalisé sur l'image
        targetImage.addEventListener("mouseenter", () => {
            cursor.style.display = "flex"; // Affiche le curseur lorsqu'on survole l'image
        });

        // Cacher le curseur personnalisé quand la souris quitte l'image
        targetImage.addEventListener("mouseleave", () => {
            cursor.style.display = "none"; // Cache le curseur lorsqu'on quitte l'image
        });
    }
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animation-text").forEach((element, index) => {
    gsap.fromTo(element,
        { opacity: 0, y: 50 }, // Départ caché + en bas
        {
            opacity: 1, y: 0, // Apparaît en remontant
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // Animation démarre quand le texte atteint 80% du viewport
                end: "top 20%", // Animation se termine quand le texte atteint 50%
                scrub: true, // Animation fluide avec le scroll,
                once: true
            }
        }
    );
});
gsap.from(".navbar", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
});

// Animation du header (titre, texte, boutons)
gsap.from(".display-5", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.5
});

gsap.from(".lead", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: 0.8
});

gsap.from(".d-grid .btn", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    delay: 1
});

gsap.from(".custom-image-intro", {
    opacity: 0,
    y: -10,
    duration: 1,
    ease: "power2.out"
});

// ScrollTrigger pour déclencher au scroll
gsap.from(".navbar", {
    scrollTrigger: {
        trigger: ".navbar",
        start: "top 10%",
        toggleActions: "play none none none",
        once: true
    }
});

gsap.from(".display-5, .lead, .d-grid, .custom-image-intro", {
    scrollTrigger: {
        trigger: "header",
        start: "top 60%",
        toggleActions: "play none none none",
        once: true
    }
});


