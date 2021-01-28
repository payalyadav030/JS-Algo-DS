// ES2015 class syntax overview:

// class Student{
//     constructor(firstname, lastname, year){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.grade = year
//     }
// }
// let StudentOne = new Student("john", "mik", 4)
// console.log(StudentOne)


//////Instance methods:  lecture 107//////////
// class Student{
//     constructor(firstname, lastname, year){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.grade = year
//         this.tardies =0
//         this.scores =[]
//     }
//     fullname(){
//         return `My name is ${this.firstname} ${this.lastname} and I am ${this.grade} years old`
//     }
//     markLate(){
//         this.tardies += 1
//         if(this.tardies >= 3){
//             return `You are expelled`
//         }
//         return `${this.firstname} ${this.lastname} has been late for ${this.tardies} times`
//     }
//     addScore(score){
//      this.scores.push(score)
//      return this.scores
//     }

//     calculateAvg(){
//        let sum = this.scores.reduce(function(a,b){return a + b})
//        return sum/this.scores.length
//     }
// }

// let StudentOne = new Student("joh", "mik", 4)
// let StudentTwo = new Student("giggle", "kim",3)
// // console.log(StudentOne.fullname())
// // console.log(StudentTwo.fullname())
// // console.log(StudentTwo.markLate())
// // console.log(StudentTwo.markLate())
// // console.log(StudentTwo.markLate())
// console.log(StudentOne.addScore(44))
// console.log(StudentOne.addScore(89))
// console.log(StudentOne.calculateAvg());

////////////////////////////////////////////////////////////////////////////////////////////////
////// adding Class method- lecture-108
// Static keyword - see developer mozilla
class Student{
        constructor(firstname, lastname, year){
            this.firstname = firstname
            this.lastname = lastname
            this.grade = year
            this.tardies =0
            this.scores =[]
        }
        fullname(){
            return `My name is ${this.firstname} ${this.lastname} and I am ${this.grade} years old`
        }
        markLate(){
            this.tardies += 1
            if(this.tardies >= 3){
                return `You are expelled`
            }
            return `${this.firstname} ${this.lastname} has been late for ${this.tardies} times`
        }
        addScore(score){
         this.scores.push(score)
         return this.scores
        }
    
        calculateAvg(){
           let sum = this.scores.reduce(function(a,b){return a + b})
           return sum/this.scores.length
        }

        static EnrollStudents(){
            return "Enrolling Students!!"
        }
    }

let StudentOne = new Student("joh", "mik", 4)
let StudentTwo = new Student("giggle", "kim",3)
// StudentOne.EnrollStudents() // will give error because we have called static with instance of class
console.log(Student.EnrollStudents()) // will run as we have called static with the class not with instances



