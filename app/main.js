import settings from "../settings.js";
import app from "../app/app.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.body.style.backgroundImage = `url(${settings.profileBio.bgImg})`;

    const header = document.getElementById("header");
    const bioProfile = document.getElementById("profile-bio");
    const contLink = document.querySelector(".container-link");
    const fWrap = document.querySelector(".f-wrap");

    setupHeader(header);
    setupProfileBio(bioProfile);
    setupLinks(contLink);
    app.setupFooter(fWrap);
    app.mQuery();
    startProfileAnimation();
    eventClick(contLink);

    checkVisibility();

    const elementReady = new CustomEvent("ready");
    document.dispatchEvent(elementReady);
}

// function nya bre
function setupHeader(header) {
    const urlSaatIni = window.location.origin;
    header.innerHTML = `
        <p id="url-saat-ini">${urlSaatIni}</p>
        <span id="copy-btn"><i class="fa-solid fa-copy"></i> <strong>Copy</strong></span>
    `;

    // salin/copy link nya brew
    const copyButton = document.getElementById("copy-btn");
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(urlSaatIni).then(() => {
            copyButton.classList.add("blink-animation");
            setTimeout(() => {
                copyButton.classList.remove("blink-animation");
            }, 700);
        });
    });
}

function setupProfileBio(bioProfile) {
    const { ppImg, nama, bio } = settings.profileBio;
    bioProfile.innerHTML = `
        <img id="profile-picture" src="${ppImg}" alt="Logo ${nama}" />
        <h2 id="profile-name">${nama}</h2>
        <p class="profile-desc">${bio}</p>
        <div class="border-btm"></div>
    `;
}

function setupLinks(contLink) {
    // Sosmed
    if (settings.show_sosmed) {
        const follUs = document.createElement("h5");
        follUs.innerHTML = `<i class="fa-solid fa-user-plus"></i> FOLLOW US ON SOSMED`;
        follUs.classList.add("header-link");
        contLink.appendChild(follUs);
        settings.sosmed.forEach(({ name, url, icon }) => {
            if (url && url !== "_") {
                const linkCard = createLinkCard(name, url, icon);
                linkCard.classList.add("link-sosmed");
                contLink.appendChild(linkCard);
            }
        });
    }

    // Grup komunitas
    if (settings.show_gc) {
        const GrNCh = document.createElement("h5");
        GrNCh.innerHTML = `<i class="fa-solid fa-user-group"></i> COMMUNITY GROUPS & CHANNEL`;
        GrNCh.classList.add("header-link");
        contLink.appendChild(GrNCh);
        settings.gc.forEach(({ namaNya, linkNya, logo }) => {
            if (linkNya && linkNya !== "_") {
                const linkCard = createLinkCard(namaNya, linkNya, logo);
                linkCard.classList.add("link-gc");
                contLink.appendChild(linkCard);
            }
        });
    }

    // Link lainnya
    if (settings.show_oth) {
        const othLink = document.createElement("h5");
        othLink.innerHTML = `<i class="fa-solid fa-globe"></i> OTHER LINKS`;
        othLink.classList.add("header-link");
        contLink.appendChild(othLink);
        settings.oth.forEach(({ myName, myLink, myIcon }) => {
            if (myLink && myLink !== "_") {
                const linkCard = createLinkCard(myName, myLink, myIcon);
                linkCard.classList.add("link-oth");
                contLink.appendChild(linkCard);
            }
        });
    }
}

// fungsi animation & event
function createLinkCard(name, url, icon) {
    const linkCard = document.createElement("div");
    linkCard.classList.add("link-card");
    linkCard.innerHTML = `
        ${icon}
        <a class="btn-link" href="${url}" target="_blank">${name}</a>
        <i class="fa-solid fa-diamond"></i>
    `;
    return linkCard;
}

function eventClick(contLink) {
    // Event click pada link cards
    contLink.addEventListener("click", e => {
        const linkCard = e.target.closest(".link-card");
        if (linkCard) {
            const toUrl = linkCard.querySelector("a").href;
            if (toUrl) window.open(toUrl, "_blank");
        }
    });
}

function startProfileAnimation() {
    const profilePicture = document.getElementById("profile-picture");

    const animate = () => {
        profilePicture.classList.add("animate");
        setTimeout(() => profilePicture.classList.remove("animate"), 5000);
        setTimeout(animate, 8000);
    };

    animate();
}

function checkVisibility() {
    const linkCards = document.querySelectorAll(".link-card");
    const myWm = document.querySelector(".my-wm");
    const bio = document.querySelector("#profile-bio");

    const fadeIn = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fadeIn");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    linkCards.forEach(linkCard => {
        fadeIn.observe(linkCard);
    });

    const slideUp = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slideUp");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    slideUp.observe(myWm);

    const slideDown = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slideDown");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    slideDown.observe(bio);

    // Sebenernya ada cara yg lebih simple, tapi seperti ini agar mudah kalian pahami.
}

// kalo mau ada sfx sentuh, hapus /**/ nya
/*
document.addEventListener("touchstart", function () {
    const sound = new Audio("https://files.catbox.moe/k0tx90.opus");
    sound.play();
});
*/