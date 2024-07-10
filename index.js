const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
            if (input.length > 3) {
                return 'You can only enter up to three characters.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
        validate: (input) => {
            const isColorKeyword = /^[a-zA-Z]+$/.test(input);
            const isHex = /^#([0-9A-F]{3}){1,2}$/i.test(input);
            if (isColorKeyword || isHex) {
                return true;
            }
            return 'Please enter a valid color keyword or hexadecimal number.';
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
        validate: (input) => {
            const isColorKeyword = /^[a-zA-Z]+$/.test(input);
            const isHex = /^#([0-9A-F]{3}){1,2}$/i.test(input);
            if (isColorKeyword || isHex) {
                return true;
            }
            return 'Please enter a valid color keyword or hexadecimal number.';
        }
    }
];

function generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeElement;
    switch (shape) {
        case 'circle':
            shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeElement = `<polygon points="150,30 230,170 70,170" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeElement = `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`;
            break;
    }}

//     const svgContent = `
//         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//             ${shapeElement}
//             <text x="150" y="105" font-size="50" text-anchor="middle" fill="${textColor}" dominant-baseline="middle">${text}</text>
//         </svg>
//     `;

//     fs.writeFileSync('logo.svg', svgContent.trim());
//     console.log('Generated logo.svg');
// }

// inquirer.prompt(questions).then(answers => {
//     generateSVG(answers);
// });
