
// Test if dead by checking 0th element
class entity {
    constructor(name, speed, might, sanity, knowledge, imgRel) {
        this.name = name;
        this.speed = speed;
        this.might = might;
        this.sanity = sanity;
        this.knowledge = knowledge;
        this.imgRel = imgRel;
    }

    set name(name) {this.name = name}
    set speed(speed) {this.speed = speed}
    set might(might) {this.might = might}
    set sanity(sanity) {this.sanity = sanity}
    set knowledge(knowledge) {this.knowledge = knowledge}

    get name() {return this.name}
    get speed() {return this.speed}
    get might() {return this.might}
    get sanity() {return this.sanity}
    get knowledge() {return this.knowledge}
    get imgRel() {return this.imgRel}
}

class Item {
    
}