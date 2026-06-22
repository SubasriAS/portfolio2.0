// WAIT FOR DOM
window.addEventListener("DOMContentLoaded", () => {

    // 🌸 SMOOTH SCROLL FOR INTERNAL LINKS
    document.querySelectorAll("a").forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (href && href.startsWith("#")) {
                e.preventDefault();

                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });

    });


    // 🌸 CERTIFICATE IMAGE POPUP
    document.querySelectorAll(".cert-card img").forEach(img => {

        img.addEventListener("click", () => {

            const popup = document.createElement("div");

            popup.style.position = "fixed";
            popup.style.top = "0";
            popup.style.left = "0";
            popup.style.width = "100%";
            popup.style.height = "100%";
            popup.style.background = "rgba(0,0,0,0.8)";
            popup.style.display = "flex";
            popup.style.justifyContent = "center";
            popup.style.alignItems = "center";
            popup.style.zIndex = "9999";

            const bigImg = document.createElement("img");

            bigImg.src = img.src;
            bigImg.style.maxWidth = "90%";
            bigImg.style.maxHeight = "90%";
            bigImg.style.borderRadius = "20px";
            bigImg.style.boxShadow = "0 0 20px white";

            popup.appendChild(bigImg);
            document.body.appendChild(popup);

            popup.addEventListener("click", () => {
                popup.remove();
            });

        });

    });


    // 🌸 PROFILE FLIP CARD
    const flipCard = document.querySelector(".flip-card");

    if (flipCard) {

        flipCard.addEventListener("click", function () {

            this.classList.toggle("active");

        });

    }


    // 🌸 CUSTOM CURSOR
    const cursor = document.querySelector(".cursor");

    if (cursor) {

        document.addEventListener("mousemove", (e) => {

            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

        });

    }


    // 🚀 SPACE JOURNEY ROCKET ANIMATION
    const rocket = document.querySelector(".rocket");

    if (rocket) {

        window.addEventListener("scroll", () => {

            const scrollProgress =
                window.scrollY /
                (document.body.scrollHeight - window.innerHeight);

            rocket.style.transform =
                `translateY(${scrollProgress * 500}px) rotate(15deg)`;

        });

    }

});