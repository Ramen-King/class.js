class Student {
    constructor(name, status, term){
        this.name = name
        this.status = status
        this.term = term
    }

    termNum(){
        console.log(`${this.name} is in Term: ${this.term}`)
    }

    skillLevel(){
        console.log(`${this.status} codes at a ${this.lvl}'s level`)
    }
}

let student1 = new Student('Jimmy', 'Student', 3)
student1.termNum()
student1.skillLevel() 

