/* ==========================================
   MST MEDIA - script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       MOBILE MENU
    =========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }


    /* ===========================
       SMOOTH SCROLL
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ===========================
       BACK TO TOP BUTTON
    =========================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.style.display = "none";

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* ===========================
       NAVBAR SCROLL EFFECT
    =========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background = "rgba(5,5,5,.92)";
            header.style.backdropFilter = "blur(30px)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

        } else {

            header.style.background = "rgba(5,5,5,.55)";
            header.style.boxShadow = "none";

        }

    });


    /* ===========================
       FADE-IN ON SCROLL
    =========================== */

    const cards = document.querySelectorAll(

        ".service-card,.why-card,.portfolio-card,.testimonial-card,.faq-card,.stat-card,.about-card"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";

            }

        });

    }, {

        threshold: 0.15

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all .8s ease";

        observer.observe(card);

    });


    /* ===========================
       ANIMATED COUNTERS
    =========================== */

    const counters = document.querySelectorAll(".stat-card h3");

    counters.forEach(counter => {

        const targetText = counter.innerText;

        const target = parseInt(targetText.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let current = 0;

        const speed = Math.max(10, Math.floor(target / 80));

        const update = () => {

            current += speed;

            if (current >= target) {

                counter.innerText = targetText;

                return;

            }

            let suffix = targetText.replace(/[0-9]/g, "");

            counter.innerText = current + suffix;

            requestAnimationFrame(update);

        };

        update();

    });


    /* ===========================
       HERO PARALLAX
    =========================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("mousemove", (e) => {

        if (!hero) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;

        hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;

    });


    /* ===========================
       BUTTON RIPPLE EFFECT
    =========================== */

    document.querySelectorAll(".primary-btn,.secondary-btn,.nav-btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-5px) scale(1.03)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0px) scale(1)";

        });

    });

});