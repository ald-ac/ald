const photo1 = document.querySelector('#photo1');
const title1 = document.querySelector('#title1');
const photo2 = document.querySelector('#photo2');
const title2 = document.querySelector('#title2');

document.addEventListener('DOMContentLoaded', showCover);

function showCover() {

    photo1.style.transform = 'translateX(0%)';
    title1.style.transform = 'translateX(0%)';
    photo2.style.transform = 'translateX(0%)';
    title2.style.transform = 'translateX(0%)';
}