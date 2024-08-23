// // bai 7
// const listEmployees = [
//     { id: 1, name: "A", salary: 2000},
//     { id: 2, name: "B", salary: 2500},
//     { id: 3, name: "C", salary: 3000},
// ]
// const findHighestSalary = (a,b) => {
//     return b - a;
// }
// const sortSalary = listEmployees.sort((a,b) => findHighestSalary
// (a.salary, b.salary))
// if (sortSalary.length > 0) {
//     // console.log(sortSalary[0]);
// }

// bai 8
// const employees = [
//     { id: 1, name: "A", workingDays: 22, lateDays: 2},
//     { id: 2, name: "B", workingDays: 20, lateDays: 0},
//     { id: 3, name: "C", workingDays: 25, lateDays: 1},
// ]
// const findSumDays = (a,b) => {
//     return b - a;
// }
// const sortWorkingDay = employees.sort((a, b) => findSumDays((a.workingDays - a.lateDays), (b.workingDays - b.lateDays)));
// if (sortWorkingDay.length > 0) {
//     // console.log(sortWorkingDay[0]);
// }


// bai 9
const listEmployees = [
    { id: 1, name: "An", salary: 2000},
    { id: 2, name: "Binh", salary: 2500},
    { id: 3, name: "Thu", salary: 3000},
    { id: 4, name: "An", salary: 2200},
]

const groupByName = (employees) => {
    return employees.reduce(accumulateByName,{});
};
const accumulateByName = (acc, employees) => {
    if (!acc[employees.name]) {
        acc[employees.name] = [];
    }
    acc[employees.name].push(employees);
    return acc;
}
console.log(groupByName(listEmployees));


// bai 10
const employeesArrOne = [
    { id: 1, name: "A", workingDays: 22, lateDays: 2, salary: 2000},
    { id: 2, name: "B", workingDays: 20, lateDays: 0, salary: 2500},
    { id: 3, name: "C", workingDays: 25, lateDays: 1, salary: 3000},
]

const findBestPerformance = (a, b) =>{
    return b - a;
}
const sortPerformance = employeesArrOne.sort((a, b) => findBestPerformance((a.workingDays / a.salary), (b.workingDays / b.salary)));
if (sortPerformance.length > 0) {
    console.log(sortPerformance[0]);
}

// bai 11
const employeesArrTwo = [
    { id: 1, name: "A", workingDays: 20},
    { id: 2, name: "B", workingDays: 22},
    { id: 3, name: "C", workingDays: 20},
    { id: 4, name: "D", workingDays: 24},
    { id: 5, name: "E", workingDays: 22},
];

const countWorkingDays = (employees) => {
    return employees.reduce(accumulateWorkingDays,{});
};
const accumulateWorkingDays = (acc, employees) => {
    const days = employees.workingDays;
    if (!acc[days]) {
        acc[days] = 0;
    }
    acc[days]++;
    return acc;
}
console.log(countWorkingDays(employeesArrTwo));

// bai 12
const employeesArrThree = [
    { id: 1, name: "A", email: "a@example.com", workingDays: 20, lateDays: 2, salary: 2000},
    { id: 1, name: "B", email: "b@example.com", workingDays: 22, lateDays: 0, salary: 2500},
    { id: 1, name: "C", email: "c@example.com", workingDays: 25, lateDays: 1, salary: 3000},
];
const transformData = (employees) => {
    return employees.map(({ name, email, workingDays, lateDays, salary}) => ({
        name,
        email,
        workInfo: { workingDays, lateDays, salary},
    }));
};
console.log(transformData(employeesArrThree));

// bai 13
let task = [
    {
        name: "Hoàn thành bài tập JavaScript",
        description: "Làm xong bài tập về Array và Object",
        completed: false,
    },
    {
        name: "Đọc sách",
        description: "Đọc xong chương 3",
        completed: true,
    },
    {
        name: "Đi mua hàng",
        description: "Mua thêm thức ăn cho tuần",
        completed: false,
    },
]