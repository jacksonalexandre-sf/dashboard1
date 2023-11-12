let list = document.querySelectorAll('.sidebar li');

function activeLink(){
    list.forEach((item) => {
        item.classList.remove('hovered');
    });
    this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover', activeLink));

// Menu Sanduiche
let menu = document.querySelector('.menu').addEventListener('click', moverSidebar);
let sidebar = document.querySelector('.sidebar');
let main = document.querySelector('.main');

function moverSidebar(){
    if(sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        main.classList.remove('active');
    } else {
        sidebar.classList.add('active');
        main.classList.add('active');
    }
}