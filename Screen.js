class Screen{
    constructor(){
        this.button1 = createButton("Story 1")
        this.button2 = createButton("Story 2")
        this.button3 = createButton("Story 3")

    }
    display(){
        this.button1.position(300,600)
        this.button2.position(600,600)
        this.button1.position(900,600)
    }
}