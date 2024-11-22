import P5Lib from 'p5';
import { Shape } from "./shape";

export class Circle extends Shape {
    #color: P5Lib.Color;

    public constructor(p5: P5Lib) {
        super(p5);
        this.#color = getColor();
    }

    public override draw(): void {
        this.p5.fill(this.#color);
        this.p5.ellipse(this.POS.x, this.POS.y, this.SIZE, this.SIZE);
    }

    public override setColor(color: P5Lib.Color | P5Lib.Color[]): void {
        console.log(#color);
    }
}