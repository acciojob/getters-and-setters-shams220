//complete this code
class Person {
	constructor(name:string,age:number){
		getName(){
return this.name;
		}
		setAge(age){
			this.age = age
		}
		study(){
			console.log(`${this.name} is studying`);
		}
		teach(){class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    console.log( this.name);
  }
  setAge(age) {
    this.age = age;
    console.log(this.age)
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}


console.log(`${this.name} is teaching`)
		}
	}
}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
