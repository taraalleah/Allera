let calendar = document.querySelector('.calendar_content');

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0);
};

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
};

generateCalendar = (month, year) => {
    let calendar_days = calendar.querySelector('.calendar-days');
    let calendar_header_month = calendar.querySelector('#month-picker');
    
    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    calendar_days.innerHTML = '';

    let currDate = new Date();
    if (month === undefined) month = currDate.getMonth();
    if (year === undefined) year = currDate.getFullYear();

    let curr_month = month_names[month];
    calendar_header_month.innerHTML = curr_month;
    calendar.querySelector('#year').innerHTML = year;

    let first_day = new Date(year, month, 1);

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div');
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover');
            day.innerHTML = i - first_day.getDay() + 1;
            day.innerHTML += `<span></span><span></span><span></span><span></span>`;
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date');
            }
        }
        calendar_days.appendChild(day);
    }
};

let month_list = calendar.querySelector('.month-list');
month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div data-month="${index}">${e}</div>`;
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show');
        curr_month.value = index;
        generateCalendar(curr_month.value, curr_year.value);
    };
    month_list.appendChild(month);
});

let month_picker = calendar.querySelector('#month-picker');
month_picker.onclick = () => {
    month_list.classList.add('show');
};

let currDate = new Date();
let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

generateCalendar(curr_month.value, curr_year.value);

// Event handlers for previous and next month
document.querySelector('#prev-year').onclick = () => {
    if (curr_month.value === 0) {
        curr_month.value = 11;  // December
        curr_year.value--;  // Decrease the year
    } else {
        curr_month.value--;  // Go to the previous month
    }
    generateCalendar(curr_month.value, curr_year.value);
};

document.querySelector('#next-year').onclick = () => {
    if (curr_month.value === 11) {
        curr_month.value = 0;  // January
        curr_year.value++;  // Increase the year
    } else {
        curr_month.value++;  // Go to the next month
    }
    generateCalendar(curr_month.value, curr_year.value);
};

let dark_mode_toggle = document.querySelector('.dark-mode-switch');
dark_mode_toggle.onclick = () => {
    document.querySelector('#form').classList.toggle('light');
    document.querySelector('#form').classList.toggle('dark');
};