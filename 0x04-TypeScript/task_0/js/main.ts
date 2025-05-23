
interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Leul',
    lastName: 'Yiheyis',
    age: 25,
    location: 'Addis Ababa, Ethiopia'
}

const student2: Student = {
    firstName: 'Abebe',
    lastName: 'Kebede',
    age: 35,
    location: 'Bahir Dar, Ethiopia'
}

const studentsList: Student[] = [student1, student2]

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const headerRow: HTMLTableRowElement = document.createElement('tr');

const tHead1 = document.createElement('th');
tHead1.textContent = 'First Name';
const tHead2 = document.createElement('th');
tHead2.textContent = 'Location';

headerRow.appendChild(tHead1);
headerRow.appendChild(tHead2);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach(student => {
    const row: HTMLTableRowElement = document.createElement('tr');

    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);
