

'use strict';

//Declare and define superclass Gradebook.
//Class GradeBook houses methods. This shows the OOP concept of Encapsulation.
class GradeBook{

	constructor(subject=''){
		this.subject = subject;
	}// end of constructor function

	getsubject(){
		return this.subject;
	}//end of getsubject function

}// end of class GradeBook

//Declare and define subclass Student. This shows the OOP concept of Inheritance.
//subClass Student houses methods. This shows the OOP concept of Encapsulation. 
class Student extends GradeBook{
	constructor(subject,studentName){
		super(subject);
		this.studentName = studentName;
	}// end of cnstructor

	getstudentName(){
		return this.studentName;
	}//end of getsubject function

//Same function name as defined in subclass Teacher but performs a different action.This shows the OOP concept of Polymorphism
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

//Declare and define subclass Teacher. This shows the OOP concept of Inheritance.
//subClass Teacher houses methods. This shows the OOP concept of Encapsulation.
class Teacher extends GradeBook{

	constructor(subject,teacherName){
		super(subject);
		this.teacherName = teacherName;
	}// end of cnstructor
	
	getTeacherName(){
		return this.teacherName;
	}//end of function get teacherName

//Same function name as defined in subclass Student but performs a different action.This shows the OOP concept of Polymorphism
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

export {GradeBook,Student,Teacher}; // exports multiple classes.
