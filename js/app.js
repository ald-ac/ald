import { getProjects } from './API.js';

//Selectors
const recentProjects = document.querySelector('#recentProjects');

//Listeners
document.addEventListener('DOMContentLoaded', loadProjects);

async function loadProjects() {
    const projects = await getProjects();
    buildHTML(projects);
}

function buildHTML(projects) {
    let fragment = document.createDocumentFragment(); 

    projects.some( (project, index) => {
    //important data
    const {id, name, profilePicture, shortDescription } = project;

        //stop only two most recents
        if(index >= 2) {
            return;
        }

        let htmlProject = document.createElement('article');
        htmlProject.innerHTML = `
            <img src="${profilePicture}" alt="${name}">
        `;

        const divData = document.createElement('div');
        divData.innerHTML = `
            <h3>${name}</h3>
            <p>${shortDescription}</p>
        `;

        const detailsBtn = document.createElement('a');
        detailsBtn.textContent = 'Detalles';
        detailsBtn.href = './project.html?id='+id; 
        divData.appendChild(detailsBtn);

        htmlProject.appendChild(divData);

        fragment.appendChild(htmlProject);
    });

    recentProjects.appendChild(fragment);
}

