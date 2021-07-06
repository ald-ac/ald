import { getProjects } from './API.js';
import { buildHTMLProj } from './functions.js';

//Selectors
const recentProjects = document.querySelector('#recentProjects');

//Listeners
document.addEventListener('DOMContentLoaded', loadProjects);

async function loadProjects() {
    const projects = await getProjects(true);
    buildHTMLProj(projects, recentProjects);
}

