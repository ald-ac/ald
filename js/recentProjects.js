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
    let name, profileImage, shortDescription; 

    //Order by most recent
    projects.sort(function(a,b) {
        return new Date(b.date) - new Date(a.date);
    });

    projects.forEach( project => {
    //important data
            name = project.name; 
            profileImage = url+project.profileImage.url;
            shortDescription = project.shortDescription;

            console.log(name);
            console.log(profileImage);
            console.log(shortDescription);
    });
}

//Listeners
document.addEventListener('DOMContentLoaded', getProjects);

