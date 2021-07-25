let elements = [];
//Cover
elements.push(document.querySelector('#photo1'));
elements.push(document.querySelector('#title1'));
elements.push(document.querySelector('#photo2'));
elements.push(document.querySelector('#title2'));

//Header
elements.push(document.querySelector('header'));

//time transition
const timeTransition = 0.7;
document.addEventListener('DOMContentLoaded', showCover);

function showCover() {

    elements.forEach(element => {
        element.style.transform = 'translateX(0%)';
        element.style.transition = `all ${timeTransition}s`;
    })
}