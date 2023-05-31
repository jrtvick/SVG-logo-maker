const SVG = require('./svg');
const {Circle} = require('./shape');

it ('Should return a 300x200 svg', () => {
    const expectedCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const testSVG = new SVG();
    expect(testSVG.render()).toEqual(expectedCode);
});

it ('Can append text and colour', () => {
    const expectedCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">run</text></svg>';
    const testSVG = new SVG();
    testSVG.setText("run", "yellow");
    expect(testSVG.render()).toEqual(expectedCode);
});

it ('Should validate that the text is 3 or less characters in length', () => {
    const expectedError = new Error("The title must be 3 characters or less");
    const testSVG = new SVG();
    expect(() => testSVG.setText("fail", "orange")).toThrow(expectedError);
});

it ('Can append shape and colour', () => {
    const expectedCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /></svg>';
    const testSVG = new SVG();
    const circle = new Circle();
    circle.setColour('red');
    testSVG.setShape(circle);
    expect(testSVG.render()).toEqual(expectedCode);
});