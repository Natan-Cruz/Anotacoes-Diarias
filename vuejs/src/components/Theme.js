function isDarkMode() {
    return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

function toLight() {
    let root = document.documentElement;

    root.style.setProperty('--background', "#fff");
    root.style.setProperty('--surface', "#fff");
    root.style.setProperty('--title', "#000");
    root.style.setProperty('--title-card', "rgb(29,29,29)");
    root.style.setProperty('--preview-text-card', "#000");
    root.style.setProperty('--border-contrast', "border");
}

function toDark() {
    let root = document.documentElement;
    root.style.setProperty('--background', "#121212");
    root.style.setProperty('--surface', "#515151");
    root.style.setProperty('--title', "rgba(255, 255, 255, 0.87)");
    root.style.setProperty('--title-card', "rgba(255, 255, 255, 0.6)");
    root.style.setProperty('--preview-text-card', "rgba(255, 255, 255, 0.55)");
    root.style.setProperty('--border-contrast', "solid 1px rgba(255, 255, 255, 0.15)");
}

export {
    isDarkMode,
    toLight,
    toDark
}