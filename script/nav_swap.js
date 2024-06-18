document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link, .navbar-brand");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            var url = this.getAttribute("href");

            // 如果是外部連結，則直接設置 target="_blank"
            if (this.classList.contains("external")) {
                this.setAttribute("target", "_blank");
                return;
            }

            event.preventDefault();

            /* 加載內容 */
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    document.getElementById("main-content").innerHTML = html;
                })
                .catch(error => console.error("Error loading page:", error));
        });
    });

    /* 預設加載 init.html */
    fetch('html/init.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        })
        .catch(error => console.error("Error loading default page:", error));
});