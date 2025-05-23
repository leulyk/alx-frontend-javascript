
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

type SchoolEmployee = Director | Teacher

function createEmployee(salary: number | string): SchoolEmployee {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher()
    }
    return new Director()
}

function isDirector(employee: SchoolEmployee): employee is Director {
    return employee instanceof Director
}

function executeWork(employee: SchoolEmployee) {
    if (isDirector(employee)) {
        console.log((employee as Director).workDirectorTasks())
    } else {
        console.log((employee as Teacher).workTeacherTasks())
    }
}

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));
// executeWork(createEmployee(200));
// executeWork(createEmployee(1000));
