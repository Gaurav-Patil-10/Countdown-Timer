const newYear = "1 Jan 2023";

function countdown() {
    
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const diff = new Date(newYearsDate - currentDate);

    console.log(diff.getDate)
}


countdown()

