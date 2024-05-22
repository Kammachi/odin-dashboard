const root = document.querySelector(':root');
root.setAttribute("class", "light");

const svgs = document.querySelectorAll('.theme-icon');


function changeTheme() {
    root.setAttribute("class", root.className == "dark" ? "light" : "dark");
    
    svgs.forEach((svg) => {
        svg.setAttribute("fill", svg.getAttribute("fill") == "black" ? "white" : "black");
    });
}


document.querySelector('.theme-change').addEventListener('click', changeTheme);