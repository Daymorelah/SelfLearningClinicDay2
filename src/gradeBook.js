/** Create an OOP implementation by modelling a real-world scenario/problem, 
while taking advantage of inheritance, encapsulation, polymorphism and the 
other OOP concepts. Push this solution to GitHub. **/

'use strict';

class GradeBook{
	constructor(subject){
		this.subject = subject;
	}// end of constructor function

	getsubject(){
		return this.subject;
	}//end of getsubject function

}// end of class GradeBook

class Student extends GradeBook{
	constructor(subject,studentName){
		super(subject);
		this.studentName = studentName;
	}// end of cnstructor

	getstudentName(){
		return this.tudentName;
	}//end of getsubject function

	welcomeMessage(){
		return `Welcome to the Grade Book for Student: ${this.studentName}`
	}

	getAverageScore(scoreList){
		let result = 0;
		let average = 0;
		for(let score=0; score<scoreList.length; score++){
			result += score;
		}//end of for loop
		average = (result/scoreList.length);
		return average;
	}//end of function averageScore

}//end of subclass student

class Teacher extends GradeBook{
	constructor(subject,teacherName){
		super(subject);
		this.teacherName = teacherName;
	}// end of cnstructor
	
	getTeacherName(){
		return this.teacherName;
	}//end of function get teacherName

	welcomeMessage(){
		return `Welcome to the Grade Book for Teacher: ${this.teacherName}`
	} //end of function welcome message

	teachersPerformance(numberOfPass,numberOfCredit, numberOfFail){

		if ((numberOfPass>numberOfFail) && (numberOfPass>numberOfFail)){
			return 'Majoriy of Students passed!, Successful semester' ;
		} //end of if statement
		else if ((numberOfFail>numberOfPass) && (numberOfFail>numberOfPass)){
			return 'Majoriy of Students Failed!, Unsuccessful semester'
		}// end of else if statement
		else{
			return 'Majority of students are on credit, Improve on mode of Teaching next semester';
		}// end of else statement

	}//end of function teachersPerformance

}//end of subclass teacher

/*
let student1 = new Student('mathematics','Adewale Adeoye');
let teacher1 = new Teacher('mathematics','Jhon Doe');

console.log('students nanme is: '+student1.studentName);
console.log('students subject is: '+student1.subject);

console.log('teachers nanme is: '+teacher1.teacherName);
console.log('teachers subject is: '+teacher1.subject);

console.log('students nanme is: '+student1.studentName);

console.log('Teachers outcome: '+teacher1.teachersPerformance(20,5,16));

console.log('welcome for student is: '+student1.welcomeMessage());
console.log('welcome for teacher is: '+teacher1.welcomeMessage());
*/