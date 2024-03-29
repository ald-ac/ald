let elements = [];

//Header
document.querySelector('header').style.transform = 'translateY(-200%)';
elements.push(document.querySelector('header'));

//Cover
elements.push(document.querySelector('#photo1'));
elements.push(document.querySelector('#title1'));
elements.push(document.querySelector('#photo2'));
elements.push(document.querySelector('#title2'));


//time transition
const timeTransition = 0.7;
document.addEventListener('DOMContentLoaded', showCover);

function showCover() {

    elements.forEach(element => {
        element.style.transform = 'translateX(0%)';
        element.style.transition = `all ${timeTransition}s`;
    })
}