var containerFlex = document.querySelector('.containerFlex');
var box = document.querySelectorAll('.box');

function row(){
    box.forEach((item) => {
        item.style.width = "15%";
        item.style.height = "100%";
    })
    containerFlex.style.flexDirection = "row";
}

function rowReverse(){
    box.forEach((item) => {
        item.style.width = "15%";
        item.style.height = "100%";
    })
    containerFlex.style.flexDirection = "row-reverse";
}

function column(){
    box.forEach((item) => {
        item.style.width = "100%";
        item.style.height = "25%";
    })
    containerFlex.style.flexDirection = "column";
}

function columnReverse(){
    box.forEach((item) => {
        item.style.width = "100%";
        item.style.height = "25%";
    })
    containerFlex.style.flexDirection = "column-reverse";
}