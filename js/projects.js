"use strict"

let projectsPic = [

]

const projects = document.querySelector('.projects-slider-wrapper')

for (let i = 0; i < 4; i++) {
    let cardTemplate = `
    <div class="project-card">
        <div class="project-card-img">
            <img src="img/NisH.png" alt="">
        </div>
        <div>
            <h3 class="text-center">To Do App</h3>
            <div class="project-links text-center">
                <a href="">asdf</a>
                <a href="">qrer</a>
            </div>
        </div>
    </div>
    `
    projects.innerHTML += cardTemplate
}