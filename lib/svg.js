class Svg {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }
  setText(text, color) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShape(shape) {
    this.shapeEl = shape.render();
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
  }
}

module.exports = Svg;
