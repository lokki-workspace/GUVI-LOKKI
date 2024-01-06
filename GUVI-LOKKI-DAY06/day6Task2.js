//DAY 6
//TASK 02 - CIRCLE OOPS TASK

class Circle {
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  let circle1 = new Circle(6, "black");
  

  console.log(circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());

  
// OUTPUT :
// Circle [radius = 6 , color = black]
// Area: 113.09733552923255
// Circumference: 37.69911184307752