import P5Lib from 'p5';

export class Spiral {
    readonly #SPECIAL: number = 137.5;
    readonly #POSITIONS: P5Lib.Vector[] = [];
    readonly #p5: P5Lib; 
    readonly #POS: P5Lib.Vector = new P5Lib.Vector();

    #pointTotal: number;
    #pointSize: number;
    #c: number;
    #colA: P5Lib.Color;
    #colB: P5Lib.Color;
    #colors: P5Lib.Color[] = [];

    constructor(p5: P5Lib, pos: P5Lib.Vector, pointTotal: number, pointSize: number, c: number) {
        this.#p5 = p5;
        this.#POS.set(pos);
        this.#pointTotal = pointTotal;
        this.#pointSize = pointSize;
        this.#c = c;
        this.#buildPoints();

        this.#colA = this.#getColor();
        this.#colB = this.#getColor();
    }

    #buildPoints(): void {
        for (let i: number = 0; i < this.#pointTotal; i++) {
            const a: number = i * this.#SPECIAL;
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

    #getColor(): P5Lib.Color {
        const r: number = this.#p5.random(255);
        const g: number = this.#p5.random(255);
        const b: number = this.#p5.random(255);
        return this.#p5.color(r, g, b);
    }
}