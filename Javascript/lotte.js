let steps = [
    {
        "title": "Trin 1",
        "path": "./img/step-guide/ball-1.png"
    },
    {
        "title": "Trin 2",
        "path": "./img/step-guide/ball-2.png"
    },
    {
        "title": "Trin 3",
        "path": "./img/step-guide/ball-3.png"
    }
]

let stepsContainer = document.querySelector('.steps-container');

function addElements(step) {
    let headline = document.createElement('h2');
    let image = document.createElement('img');
    
    
    if (step.title) { 
        headline.innerText = step.title;
        image.alt = step.title;
    } else {
        headline.innerText = "Tringuide";
        image.alt = "Tringuide";
    }
    
    headline.classList.add('step-headline');

    image.src = step.path;
    image.classList.add('step-image');

    stepsContainer.appendChild(headline);
    stepsContainer.appendChild(image);
}

steps.forEach(addElements);

// for (let i = 0; i < steps.length; i++) {
//     addElements( steps[i] );
// }