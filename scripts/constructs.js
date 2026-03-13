const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// For loop: print values below 30
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// While loop: same
let j = 0;
while (j < studentReport.length) {
    if (studentReport[j] < LIMIT) {
        console.log(studentReport[j]);
    }
    j++;
}

// forEach: same
studentReport.forEach((value) => {
    if (value < LIMIT) {
        console.log(value);
    }
});

// for...in loop: same (iterates over indices)
for (const index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}

// Day names for the next DAYS days starting today
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
for (let i = 0; i < DAYS; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayName = dayNames[date.getDay()];
    console.log(dayName);
}
