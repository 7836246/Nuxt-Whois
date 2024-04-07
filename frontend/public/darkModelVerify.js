let theme = localStorage.getItem("nuxt-color-mode");

function setTheme(theme) {
    if (theme === "system" || !theme) {
        theme =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
    }
    document.querySelector("html").classList.add(theme);
    document.documentElement.setAttribute("class", theme);
}

setTheme(theme);
