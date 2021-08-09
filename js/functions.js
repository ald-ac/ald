export function buildHTMLProj(projects, section) {
    let fragment = document.createDocumentFragment();

    projects.forEach(project => {
        //important data
        const { id, name, profilePicture, shortDescription } = project;

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
        detailsBtn.href = './project.html?id=' + id;
        divData.appendChild(detailsBtn);

        htmlProject.appendChild(divData);

        fragment.appendChild(htmlProject);
    });

    section.appendChild(fragment);
}