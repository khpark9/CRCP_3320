import P5Lib from 'p5';
import { Drawable } from './drawable';
import { getColor } from './color';

export class Spiral implements Drawable {
    readonly #SPIRAL_ANGLE: number = 137.5;
    readonly #POSITIONS: P5Lib.Vector[] = [];
    readonly #p5: P5Lib; 
    readonly #POS: P5Lib.Vector = new P5Lib.Vector();
    readonly #DELTA_THETA: number;

    #pointTotal: number;
    #pointSize: number;
    #c: number;
    #colA: P5Lib.Color;
    #colB: P5Lib.Color;
    #colors: P5Lib.Color[] = [];

    #theta: number = 0;

    constructor(p5: P5Lib);
    constructor(p5: P5Lib, pos: P5Lib.Vector, pointTotal: number, pointSize: number, c: number, spiralAngle: number);

    constructor(p5: P5Lib, pos?: P5Lib.Vector, pointTotal?: number, pointSize?: number, c?: number, spiralAngle?: number) {
        this.#p5 = p5;

        // nullish coalescing operator (??) -> left side ?? right side
        // if left side is null or undefinied, return the right side
        this.#SPIRAL_ANGLE = p5.constrain(spiralAngle ?? p5.random(135, 139), 135, 139);
        const vector: P5Lib.Vector = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.#POS.set(pos ?? vector);
        this.#pointTotal = pointTotal ?? Math.floor(p5.random(100, 300));
        this.#pointSize = pointSize ?? p5.random(2, 10);
        this.#c = c ?? p5.random(4, 20);
        this.#buildPoints();

        this.#colA = this.getColor(p5);
        this.#colB = this.getColor(p5);

        this.#DELTA_THETA = p5.random(-1, 1);
    }

    #buildPoints(): void {
        for (let i: number = 0; i < this.#pointTotal; i++) {
            const a: number = i * this.#SPIRAL_ANGLE;
            const theta: number = this.#p5.radians(a); 
            const r: number = this.#c * Math.sqrt(i); 

            const x: number = Math.cos(theta) * r;
            const y: number = Math.sin(theta) * r;

            const lerpAmount: number = this.#p5.map(i, 0, (this.#pointTotal - 1), 0, 1);
            const c: P5Lib.Color = this.#p5.lerpColor(this.#colA, this.#colB, lerpAmount);  
            this.#colors.push(c);         

            this.#POSITIONS.push(new P5Lib.Vector(x, y));
        }
    }

    public draw(): void {
        this.#p5.push();
        this.#p5.translate(this.#POS.x, this.#POS.y);
        this.#POSITIONS.forEach((pos: P5Lib.Vector) => {
            this.#p5.fill(this.#colors[index]);
            this.#p5.ellipse(pos.x, pos.y, this.#pointSize, this.#pointSize);
        });
        this.#p5.pop();
    }

    public move(): void {
        this.#theta += this.#DELTA_THETA;
    }

    public setColor(color: P5Lib.Color | P5Lib.Color[]) {
        if (color instanceof P5Lib.Color) {
            this.#colA = color;
            this.#colB = color;
        } else {
            if (color.length >= 2) {
                this.#colA = color[0];
                this.#colB = color[1];
            } else if (color.length == 1) {
                this.#colA = color[0];
                this.#colB = color[0];
            }
        }
    }

    getColor(): P5Lib.Color {
        const r: number = this.#p5.random(255);
        const g: number = this.#p5.random(255);
        const b: number = this.#p5.random(255);
        return this.#p5.color(r, g, b);
    }
}