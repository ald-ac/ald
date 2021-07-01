let projects;
const url = "http://localhost:1337";

//get projects
const getProjects = async ()=> {
    
    try {
        let res = await fetch(url+'/projects');
        projects = await res.json(); 

        if(!res.ok) throw {
            status:res.status, statusText:res.statusText
        }

        buildHTML();

    } catch(error) {
        let message = error.statusText || "Ocurrió un error";
        console.log(message);
    }
}

function buildHTML() {
    let name, profileImage, shortDescription,
    fragment = document.createDocumentFragment(); 

    //Order by most recent
    projects.sort(function(a,b) {
        return new Date(b.date) - new Date(a.date);
    });

    projects.some( (project, index) => {
    //important data
        name = project.name; 
        profileImage = project.profilePicture;
        shortDescription = project.shortDescription;

        //stop
        if(index >= 2) {
            return;
        }

        let htmlProject = document.createElement('article');
        htmlProject.innerHTML = `
            <img src="${profileImage}" alt="${name}">
            <div>
                <h3>${name}</h3>
                <p>${shortDescription}</p>
                <a href="http://">Detalles</a>
            </div>
        `;
                      
        fragment.appendChild(htmlProject);
    });

    document.querySelector('#projects').appendChild(fragment);
}

//Listeners
document.addEventListener('DOMContentLoaded', getProjects);

