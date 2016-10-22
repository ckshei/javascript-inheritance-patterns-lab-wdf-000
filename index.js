function Point(x, y) {
 this.x = x
 this.y = y 
}

Point.prototype.toString = function() {
  return this.x + ", " + this.y
}

class Side {
  constructor(length) {
    this.length = length
  }
}

class Shape {

  addToPlane(x, y) {
    var point = new Point(x, y)
    this.position = point
  }

  move(x, y) {
    var point = new Point(x, y)
    this.position = point
  }
}

function Circle(radius) {
  this.radius = radius
  this.area = () => {
    return Math.PI * this.radius^2
  }
  this.circumference = () => {
    return 2 * Math.PI * this.radius
  }
  Shape.call(this);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function() {
  return this.radius * 2
}

function Polygon(array) {
  this.sides = array
  this.numberOfSides = () => {return array.length};
}

  Polygon.prototype = Object.create(Shape.prototype);
  Polygon.prototype.constructor = Polygon
  
Polygon.prototype.perimeter = function() {
  return this.sides.reduce(reducer).length
}

function reducer(a, b) {
  return {length: a.length + b.length}
}

function Quadrilateral(a, b, c, d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)]);
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.constructor = Quadrilateral

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(side) {
  Rectangle.call(this, side, side)
}
Square.prototype = Object.create(Rectangle.prototype);
Square.constructor = Square
Square.prototype.listProperties = function() {
  var array = []
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      array << ("square." + prop + ' = ' + this[prop]);
    }
  }
  debugger
  var string = array.join(" ")
  return string
}

function Triangle(a, b, c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.constructor = Triangle
