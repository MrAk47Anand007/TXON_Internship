const tabs = document.querySelector(".about-tabs"),
    aboutSelection = document.querySelector(".about-section");
tabs.addEventListener("click",(e)=>{
    if(e.target.classList.contains("tab-item")&& !e.target.classList.contains("active")){
        tabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target= e.target.getAttribute("data-target");
        aboutSelection.querySelector(".tab-content.active").classList.remove("active");
        aboutSelection.querySelector(target).classList.add("active");
    }
})