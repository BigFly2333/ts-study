export class Point {
  private _x: number
  private _y: number

  constructor (x: number, y: number) {
    this._x = x
    this._y = y
  }

  static GetDistance (p1: Point, p2: Point) {
    return Math.sqrt(Point.GetDisSquare(p1.getX(), p2.getX()) + Point.GetDisSquare(p1.getY(), p2.getY()))
  }

  static GetDisSquare (a: number, b: number) {
    return Math.pow(a - b, 2)
  }

  getX () {
    return this._x
  }

  getY () {
    return this._y
  }
}

export class ThreeDimensionPoint extends Point {
  private _z: number

  constructor (x: number, y: number, z: number) {
    super(x, y)
    this._z = z
  }

  static GetDistance (p1: ThreeDimensionPoint, p2: ThreeDimensionPoint) {
    let distx = p1.getX() - p2.getX()
    let disty = p1.getY() - p2.getY()
    let distZ = p1.getZ() - p2.getZ()
    return Math.sqrt(distx * distx + disty * disty + distZ * distZ)
  }

  getZ () {
    return this._z
  }
}
