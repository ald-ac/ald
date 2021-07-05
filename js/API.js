const url = "http://localhost:1337";

//get projects
export const getProjects = async () => {
    try {
        const res = await fetch(url+'/projects'),
        projects = await res.json(); 

        if(!res.ok) throw {
            status:res.status, statusText:res.statusText
        }

        //Order by most recent
        projects.sort(function(a,b) {
            return new Date(b.date) - new Date(a.date);
        });

        return projects;

    } catch(error) {
        let message = error.statusText || "error";
        console.log(message);
    }
}

export const getProject = async idProject => {

    try {
        const res = await fetch(url+'/projects/'+idProject),
        project = await res.json(); 

        if(!res.ok) throw {
            status:res.status, statusText:res.statusText
        }
        return project;

    } catch(error) {
        let message = error.statusText || "error";
        console.log(message);
    }
}