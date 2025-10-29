//complete this code

class Person {
	constructor(name,age){
	this.name  = name;
		this.age = age;
	}
		getName(){
console.log(this.name);
		}
		setAge(age){
			this.age = age
		}
		
	
	}


class Student extends Person {
	study(){
			console.log(`${this.name} is studying`);
		}
}

class Teacher extends Person {
		teach(){
console.log(`${this.name} is teaching`)
		}
}
let person = new Person("John",25);
person.getName();
person.setAge(30);

let student = new Student("John", 30);
student.study();

let teacher = new Teacher("John", 30);
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
