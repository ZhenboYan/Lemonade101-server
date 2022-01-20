let  toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".menu-nav-sidebar");
    let getSidebarUl = document.querySelector(".menu-nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".menu-nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".menu-nav-sidebar a");

    if(toggleNavStatus === false){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "150px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for(var i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if(toggleNavStatus === true){
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for(var i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";
        
        toggleNavStatus = false;
    }
}