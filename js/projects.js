"use strict"

const projectsObj = [
    {
        "name":"Todo App",
        "img":"todoAppImg",
        "url":"https://todoappcknishan.netlify.app/",
        "github":"https://github.com/cknishan/To-Do-App"
    },
    {
        "name":"Portfolio (Web Desings)",
        "img":"frontend_portfolio",
        "url":"https://cknishan.github.io/Portfolio-frontend-projects/",
        "github":"https://github.com/cknishan/Portfolio-frontend-projects"
    },
    {
        "name":"Rock Paper Scissors",
        "img":"rock_paper_scissors",
        "url":"https://rockpaperscissorsnishck.netlify.app/",
        "github":"https://github.com/cknishan/Rock-Paper-Scissors"
    },
    {
        "name":"Play Piano and DrumKit",
        "img":"drumsPianos",
        "url":"https://cknishan.github.io/Piano_And_Drums_JS/",
        "github":"https://github.com/cknishan/Piano_And_Drums_JS"
    }
]




const projects = document.querySelector('.projects-slider-wrapper')

for (let i = 0; i < projectsObj.length; i++) {
    let cardTemplate = `
    <div class="project-card">
        <div class="project-card-img">
            <img src="../img/projects/${projectsObj[i]["img"]}.png" alt="cknishan project image">
        </div>
        <div>
            <h3 class="text-center" 
                style="color: var(--color-primary);
                 padding: 1rem; font-weight: bolder;"
                >${projectsObj[i]["name"]}</h3>
            <div class="project-links text-center">
                <a href="${projectsObj[i]["url"]}" target="_blank" class="links">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                </a>
                <a href="${projectsObj[i]["github"]}" target="_blank" class="links">
                    <i class="devicon-github-original"></i>
                </a>
            </div>
        </div>
    </div>
    `
    projects.innerHTML += cardTemplate
}


projects.innerHTML +=  `
<div style="display: grid; place-items: center;" padding: 2rem 0rem">

    <a href="https://github.com/cknishan" target="_blank" class="links" d>
        <span>See All</span> 
        <svg style="display: inline-block;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
    </a>

</div>


`

