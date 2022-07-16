// const scripthelper = require("./scripthelper.js")

window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let calculatorArray = ["damage", "strength", "surge", "effect", "area", "physical", "spellcasting", "lowMagic", "highMagic", "teleporation", "enemy", "friendly", "quest"];

        for (let index=0; index < calculatorArray.length; index++) {
            if (event.value === "damage") {
                window.location.href="damageType.html"
            }

            if (event.value === "surgeStrength") {
                window.location.href="surgeStrength.html"
            }

            if (event.value === "surge") {
                window.location.href="surge.html"
            }

            if (event.value === "effect") {
                window.location.href="effect.html"
            }

            if (event.value === "area") {
                window.location.href="area.html"
            }

            if (event.value === "physical") {
                window.location.href="phsyical.html"
            }

            if (event.value === "spellcasting") {
                window.location.href="spellcasting.html"
            }

            if (event.value === "lowMagic") {
                window.location.href="lowMagic.html"
            }

            if (event.value === "highMagic") {
                window.location.href="highMagic.html"
            }

            if (event.value === "teleportation") {
                window.location.href="teleportation.html"
            }

            if (event.value === "enemy") {
                window.location.href="enemy.html"
            }

            if (event.value === "friendly") {
                window.location.href="friendly.html"
            }

            if (event.value === "quest") {
                window.location.href="quest.html"
            }

        }
    });
    });