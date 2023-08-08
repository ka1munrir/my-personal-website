document.addEventListener(`DOMContentLoaded`, init);

const h1 = document.querySelector(`div#page-content h1#title`)
const contentDiv = document.querySelector(`div#specific-content`);



function projectsHeaderHandler(){
    // if(contentDiv.innerHTML !== null){
    //     contentDiv.innerHTML = "";
    // }
}

function aboutHeaderHandler(){
    // if(contentDiv.innerHTML !== null){
    //     contentDiv.innerHTML = "";
    // }
    h1.textContent = `About`;
    const p = document.createElement(`p`);
        p.id = `about-me`
        p.textContent = `I am a beginner software engineer learning about web development.`;
    contentDiv.append(p);
}

function contactHeaderHandler(){
    // if(contentDiv.innerHTML !== null){
    //     contentDiv.innerHTML = "";
    // }
    h1.textContent = `Contact`;
    const liEmail = document.createElement(`li`);
        liEmail.id = `email`;
        liEmail.textContent = `jdoa2003@protonmail.com`;
    const liPhone = document.createElement(`li`);
        liPhone.id = `phone`;
        liPhone.textContent = `(505) 300-9739`;
    const labelEmail = document.createElement(`label`);
        labelEmail.className = `contactLabel`;
        labelEmail.for = `email`;
        labelEmail.textContent = `Email: `;
    const labelPhone = document.createElement(`label`);
        labelPhone.className = `contactLabel`;
        labelPhone.for = `phone`;
        labelPhone.textContent = `Phone: `;
    const ul = document.createElement(`ul`);
        ul.append(labelEmail, liEmail, labelPhone, liPhone);
    contentDiv.append(ul);
}




function init(){
    // document.querySelector(`#projects-header`).addEventListener(`click`, projectsHeaderHandler);
    // document.querySelector(`#about-header`).addEventListener(`click`, aboutHeaderHandler);
    // document.querySelector(`#contact-header`).addEventListener(`click`, contactHeaderHandler);
    console.log(`hello`);
}