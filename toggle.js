function toggleMode() {
    const currentMode = document.documentElement.getAttribute("data-theme");
    const newMode = currentMode === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newMode);
    document.getElementById("styles").setAttribute("href", `./css/estilos-${newMode}.css`);
     // Cambia el ícono
     const modeIcon = document.getElementById("modeIcon");
     modeIcon.className = newMode === "light" ? "fa fa-sun-o" : "fa fa-moon-o";
}

// Detecta el modo del sistema y establece el tema inicial
window.matchMedia('(prefers-color-scheme: dark)').matches ? 
    document.documentElement.setAttribute("data-theme", "dark") :
    document.documentElement.setAttribute("data-theme", "light");