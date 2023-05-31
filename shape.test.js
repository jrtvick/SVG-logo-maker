const {Circle, Square, Triangle} = require('./shape');

it ('Renders circle correctly', () => {
    const expectedCode = '<circle cx="150" cy="100" r="80" fill="red" />';
    const testCircle = new Circle();
    testCircle.setColour('red');
    expect(testCircle.render()).toEqual(expectedCode);
});

it ('Renders square correctly', () => {
    const expectedCode = '<rect x="90" y="40" width="120" height="120" fill="black" />';
    const testSquare = new Square();
    testSquare.setColour('black');
    expect(testSquare.render()).toEqual(expectedCode);
});

it ('Renders triangle correctly', () => {
    const expectedCode = '<polygon points="150, 18 244, 182 56, 182" fill="pink" />';
    const testTriangle = new Triangle();
    testTriangle.setColour('pink');
    expect(testTriangle.render()).toEqual(expectedCode);
});