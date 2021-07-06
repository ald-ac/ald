import { getProjects } from './API.js';
import { buildHTMLProj } from './functions.js';

//Selectors
const projectsSection = document.querySelector('#projects');

//Listeners
document.addEventListener('DOMContentLoaded', loadProjects);

async function loadProjects() {
    const projects = await getProjects(false);
    buildHTMLProj(projects, projectsSection);
}