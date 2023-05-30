class Shape {
  constructor() {
    this.colour = "";
  }
  setColour(shapeColour) {
    this.colour = shapeColour;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.colour}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
  }
}

module.exports = {Circle, Square, Triangle};