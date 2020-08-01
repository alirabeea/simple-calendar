const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDates = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const abrvMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];


    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    //document.querySelector('.date p').innerHTML = days[new Date().getDay()] + " " + abrvMonths[new Date().getMonth()] + " " + new Date().getDate() + ", " + new Date().getFullYear();

    document.querySelector('.date p').innerHTML = date.toDateString();

    let dates = "";

    for (let x = firstDayIndex; x > 0; x--) {
        dates += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i<= lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            dates += `<div class = "today">${i}</div>`;
        }
        else {
            dates += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        dates += `<div class="next-date">${j}</div>`;
        monthDates.innerHTML = dates;
    }
}

document.querySelector('.prev').addEventListener('click',()=> {
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})

document.querySelector('.next').addEventListener('click',()=> {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})

renderCalendar();
