document.addEventListener("DOMContentLoaded", () => {
    //Колекція кнопок фільтрів
    const filterButtons = document.querySelectorAll(".filter-button");

    const toggleButton = document.querySelector(".change-color");
    const body = document.querySelectorAll
        (
            "body, hr, .header, .sidebar, .nav-title, .nav-title-icon, .nav-active, .nav-icon, .nav-item," +
            " .header-icon, .filter-bar, .shorts-title, .shorts-section-placeholder, .search-input, .search-button, .search-icon, .menu-icon"
        );
    const AllChannelInfo = document.querySelectorAll(".channel-name, .stats");
    const AllFilterButton = document.querySelectorAll(".filter-button");

    toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("active");
        body.forEach(el => {
            el.classList.toggle("active");
        })

        AllFilterButton.forEach(el => {
            el.classList.toggle("dark-mode");
        })

        AllChannelInfo.forEach((channel) => {
            channel.classList.toggle("active");
        });

    });



    filterButtons.forEach(Button => {
        Button.addEventListener("click", () => {
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            })

            Button.classList.add("active");
        });
    });

});