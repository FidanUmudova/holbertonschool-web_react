interface Student{
  firstName: string;
  lastName: string;
  age: number;
  locatiob: string;
}
const student1: Student = {
  firstName: "Alex",
  lastName: "Rivera",
  age: 20,
  location: "Baku"
};

const student2: Student = {
  firstName: "Elena",
  lastName: "Rostova",
  age: 22,
  location: "Tallinn"
};

const studentList: Array<student> = [Student1,Student2];
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSelectionElement = document.createElement("tbody");

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
