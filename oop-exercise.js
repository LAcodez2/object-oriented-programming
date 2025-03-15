/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  addGrade(grade) {
    if (typeof grade === "number" && grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Grade must be between 0 and 100.");
    }
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  hasPassed(passingGrade) {
    return this.calculateAverageGrade >= passingGrade;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }

  enrollStudent(student) {
    if (student instanceof Student) {
      this.students.push(student);
    } else {
      console.log("Invalid student.");
    }
  }

  listStudents() {
    if (this.students.length === 0) {
      console.log(`No students are enrolled in ${this.title}`);
    } else {
      console.log(`Students enrolled in ${this.title}`);
      this.students.forEach((student, index) => {
        console.log(
          `${index + 1}. ${student.getName()} (Age: ${student.getAge()})`
        );
      });
    }
  }

  calculateCourseAverage() {
    if (this.students.length === 0) return 0;
    const totalAverage = this.students.reduce((sum, student) => {
      return sum + student.calculateAverage();
    }, 0);

    return totalAverage / this.students.length;
  }
}

const student1 = new Student('Alice', 20);
student1.addGrade(85);
student1.addGrade(90);
student1.addGrade(78);
