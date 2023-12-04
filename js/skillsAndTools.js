"use strict"

const skills = document.querySelector('.skills-wrapper')

const icons = [
    "html5/html5-original-wordmark",
    "css3/css3-original-wordmark",
    "javascript/javascript-original",
    "python/python-original-wordmark",
    "bootstrap/bootstrap-original-wordmark",
    "tailwindcss/tailwindcss-original-wordmark",
    "git/git-original-wordmark",
    "c/c-original",
    "mysql/mysql-original-wordmark",
    "sass/sass-original",
    "wordpress/wordpress-original",
    "firebase/firebase-plain-wordmark",
    "jquery/jquery-original-wordmark",
    "mongodb/mongodb-original-wordmark",
    "express/express-original",
    "react/react-original-wordmark",
    "nodejs/nodejs-original-wordmark",
    "flask/flask-original-wordmark",
    "markdown/markdown-original",
    "matlab/matlab-original",
    "linux/linux-original",
    "latex/latex-original",
    "canva/canva-original",
    "svelte/svelte-original",
    "java/java-original",
    "postgresql/postgresql-original"
]

for (let i = 0; i < icons.length; i++) {
    let boxTemplate = `
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icons[i]}.svg" />
    `
    skills.innerHTML += boxTemplate
}
