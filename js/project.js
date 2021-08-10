import { getProject } from './API.js';

//Selectors
const container = document.querySelector('#container');

//Listeners
document.addEventListener('DOMContentLoaded', loadProject);

async function loadProject() {
    //Params  URL
    const paramsURL = new URLSearchParams(window.location.search);
    const idProject = paramsURL.get('id');

    //getProject Data
    const project = await getProject(idProject);

    buildHTML(project);
}

function buildHTML(project) {
    const { name, profilePicture, pictures, description, codeUrl, projectUrl } = project;
    //console.log(proyectUrl);
    //Project HTML
    let individualProject = document.createElement('div');
    individualProject.classList.add('individualProject');
    individualProject.innerHTML = `
        <div class="desc-header">
            <img src="${profilePicture}" alt="${name}">
            <h1>${name}</h1>
        </div>
    `;

    //Description project
    let descriptionHTML = document.createElement('p');
    descriptionHTML.classList.add('project-description');
    descriptionHTML.textContent = description;
    individualProject.appendChild(descriptionHTML);

    //Images
    let images = document.createElement('div');
    images.classList.add('project-images');
    pictures.forEach(picture => {
        let image = document.createElement('img');
        image.src = picture;
        image.alt = name;
        images.appendChild(image);
    });
    //Adding to html project
    individualProject.appendChild(images);
    
    let buttons = document.createElement('div');
    buttons.classList.add('project-buttons');
    buttons.innerHTML = `<a href="${codeUrl}">Código</a>`;
    //When the project doesn't have link to preview
    if(projectUrl != undefined) {
        buttons.innerHTML += `<a href="${projectUrl}">Ver</a>`;
    }
    
    individualProject.appendChild(buttons);

    //Adding to container on DOM
    container.appendChild(individualProject);
}

