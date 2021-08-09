const url = "https://api-aldpage.herokuapp.com";

//get projects
export const getProjects = async limit => {
    try {
        //Order by date from API
        let urlP = limit ? url+'/projects?_sort=date&_limit=2' : url+'/projects?_sort=date';

        const res = await fetch(urlP),
        projects = await res.json();

        //Remove loader then response 
        // document.querySelector('#loader').remove(); 

        if(!res.ok) throw {
            status:res.status, statusText:res.statusText
        }

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

        //Remove loader then response 
        document.querySelector('#loader').remove();

        if(!res.ok) throw {
            status:res.status, statusText:res.statusText
        }
        return project;

    } catch(error) {
        let message = error.statusText || "error";
        console.log(message);
    }
}