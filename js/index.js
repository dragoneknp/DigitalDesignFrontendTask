import "../scss/clear.scss";
import "../scss/index.scss";
import "../scss/header.scss";
import "../scss/hero.scss";
import "../scss/introduction.scss";
import "../scss/benefits.scss";
import "../scss/opportunities.scss";
import "../scss/tools.scss";
import "../scss/evolve.scss";
import "../scss/prose.scss";
import "../scss/users.scss";
import "../scss/footer.scss";
import "../scss/toTop.scss";
import "../scss/notification.scss";

import { getDateInfo } from "./utils/getDateInfo";
console.log(getDateInfo("01.01.2022"));

// You can find function getDateInfo in directory utils :)

document.querySelector(".toTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const headerObserver = new IntersectionObserver(([entry]) => {
    const header = document.querySelector(".header");
    const logoItem = document.querySelector(".logoItem");
    if (!entry.isIntersecting) {
        header.classList.add("light");
        logoItem.classList.add("visible");
    }
    if (entry.isIntersecting) {
        header.classList.remove("light");
        logoItem.classList.remove("visible");
    }
});

headerObserver.observe(document.querySelector(".hero"));

const burger = document.querySelector(".header__burger");
const popup = document.querySelector(".header__popup");
burger.addEventListener("click", () => {
    burger.classList.toggle("opened");
    burger.classList.toggle("closed");
    popup.classList.toggle("opened");
    popup.classList.toggle("closed");
    if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "hidden";
    }
});

popup.addEventListener("click", (event) => {
    if (event.target !== document.querySelector(".header__search_input")) {
        burger.classList.toggle("opened");
        burger.classList.toggle("closed");
        popup.classList.toggle("opened");
        popup.classList.toggle("closed");
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }
});

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".notification").classList.toggle("hidden");
});
