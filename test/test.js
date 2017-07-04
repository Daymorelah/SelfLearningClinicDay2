
const assert = require('chai').assert;
import {GradeBook,Student,Teacher} from '../src/gradeBook';

describe('Object Orientation Programming', ()=>{

	describe('Create an instance of a class', ()=>{
		it('Create an instance of the class GradeBook when instanciated', ()=>{
			let basic5 = new GradeBook;
			let isTypeOf = basic5 instanceof GradeBook 
			assert.equal(isTypeOf,true);
		});//end of it block
		it('Create an instance of the class Student when instanciated', ()=>{
			let basic5 = new Student;
			let isTypeOf = basic5 instanceof Student; 
			assert.equal(isTypeOf,true);
		});//end of it block
		it('Create an instance of the class Teacher when instanciated', ()=>{
			let basic5 = new Teacher ;
			let isTypeOf = basic5 instanceof Teacher 
			assert.equal(isTypeOf,true);
		});//end of it block
		});//end of first inner test suite

		describe('Return properties of a class', ()=>{
		it('Should return the desired property of the class GradeBook when invoked', ()=>{
			let basic5 = new GradeBook('Mathematics'); 
			assert.equal(basic5.getsubject(),'Mathematics');
		});//end of it block
		it('Should return the desired property of the class Student when instanciated', ()=>{
			let pupil = new Student('Mathematics','Adewole Tomiwa'); 
			assert.equal(pupil.getstudentName(),'Adewole Tomiwa');
		});//end of it block
		it('Should return the desired property of the class Teacher when instanciated', ()=>{
			let classTeacher = new Teacher('Mathematics','Mr A.I Gbadamosi') ; 
			assert.equal(classTeacher.getTeacherName(),'Mr A.I Gbadamosi');
		});//end of it block
	});//end of second inner test suite
});//end of main test suite