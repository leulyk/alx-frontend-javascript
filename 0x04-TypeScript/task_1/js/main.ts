
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [attr: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (param1: string, param2: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`
}

interface Student {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string
}

interface StudentConstructor {
    new (firstName: string, lastName: string): Student
}

function createStudent(ctor: StudentConstructor, firstName: string, lastName: string): Student {
    return new ctor(firstName, lastName)
}

class StudentClass implements Student {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {}

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return this.firstName
    }
}
