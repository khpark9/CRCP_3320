// Flower class

class Flower {
    static #weight = 2;
    static #stroke = color(0, 255, 0);

    // instance variables
    #position;
    #petalColor;
    #size;

    constructor(x, y, petalColor) {
        this.#position = createVector(x, y);
        this.#petalColor = petalColor;
        this.#size = 50;
    }

    get petalColor() {
        return this.#petalColor.toString();
    }

    set petalColor(petalColor) {
        this.#petalColor = petalColor;
    }

    // get color_red() {
    //     return red(this.#petalColor);
    // }

    // get color_green() {
    //     return green(this.#petalColor);
    // }

    // get color_blue() {
    //     return blue(this.#petalColor);
    // }

    static get weight() {
        return Flower.#weight;
    }

    static get stroke() {
        return Flower.#stroke;
    }

    static set weight(w) {
        Flower.#weight = w;
    }

    static set stroke(s) {
        Flower.#stroke = s;
    }

    draw() {
        stroke(Flower.#stroke);
        strokeWeight(Flower.#weight);
        fill(this.#petalColor);
        ellipse(this.#position.x, this.#position.y, this.#size, this.#size);
    }
}