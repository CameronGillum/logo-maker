const fs = require('fs');
const path = require('path');
const { generateSVG } = require('../index.js');

describe('generateSVG', () => {
    const testCases = [
        {
            input: { text: 'ABC', textColor: '#000000', shape: 'circle', shapeColor: '#ff0000' },
            expected: '<circle cx="150" cy="100" r="80" fill="#ff0000" />'
        },
        {
            input: { text: 'XYZ', textColor: '#ffffff', shape: 'triangle', shapeColor: '#00ff00' },
            expected: '<polygon points="150,30 230,170 70,170" fill="#00ff00" />'
        },
        {
            input: { text: '123', textColor: '#123456', shape: 'square', shapeColor: '#654321' },
            expected: '<rect x="70" y="20" width="160" height="160" fill="#654321" />'
        }
    ];

    const outputPath = path.join(__dirname, 'test.svg');

    afterEach(() => {
        if (fs.existsSync(outputPath)) {
            fs.unlinkSync(outputPath);
        }
    });

    testCases.forEach(({ input, expected }) => {
        test(`generates correct SVG for shape ${input.shape}`, () => {
            generateSVG({ ...input, outputPath });

            const output = fs.readFileSync(outputPath, 'utf8');
            expect(output).toContain(expected);
        });
    });
});
