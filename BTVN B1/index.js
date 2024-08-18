// bai 3
// mảng chuỗi
const arr = ["one","two","three"];
// tiền tố 
const text = 'number:';
// arrow function thêm tiền tố vào chuỗi
const addNumber = (arr, text) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(text + arr[i]); 
    }
    return newArr;
}
console.log(addNumber(arr, text));

//bai 4 
//input
const numbers = [1,2,3,4];
// nhan doi gia tri
const doubleNumbers = (numbers) => {
    const newNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        newNumber.push(numbers[i] * 2);
    }
    return newNumber;
}
console.log(doubleNumbers(numbers));

// bai 5 
//mảng số
const nums = [1,2,3,4,5];
// lấy số lẻ
const oddNumbers = (nums) => {
    const newNums = []
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i] % 2 !==0;
        if (element) {
            newNums.push(nums[i]);
        }
    }
    return newNums;
}
console.log(oddNumbers(nums));

// bai 6
// thông tin nhân viên 
const employees = [
    {
        id:1,
        name:"John",
        workingDays: 22,
    },
    {
        id:2,
        name:"Jane",
        workingDays: 20,
    },
    {
        id:3,
        name:"Mark",
        workingDays: 25,
    },
    
]
// tổng số công làm việc
let totalDays = 0
for (let i = 0; i < employees.length; i++) {
    totalDays += employees[i].workingDays;
}
console.log(totalDays);
