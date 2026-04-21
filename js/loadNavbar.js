fetch("components/navbar.html").then(response => response.text()).then(data => {
    document.getElementById("navbar").innerHTML = data;
    
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
    
});
