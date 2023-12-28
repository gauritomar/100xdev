let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
    console.log("calculateAge() function called");

    let birthDate = new Date(userInput.value);
    let today = new Date();

    console.log("Birthdate:", birthDate);
    console.log("Today's date:", today);

    if (birthDate > today) {
        console.error("Invalid birthdate: Cannot be in the future.");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    console.log("Years:", years);
    console.log("Months:", months);
    console.log("Days:", days);

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months = 12 + months;
    }

    if (days < 0) {
        let prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days = prevMonth.getDate() - birthDate.getDate() + today.getDate();
        months--;
    }

    console.log("Adjusted Years:", years);
    console.log("Adjusted Months:", months);
    console.log("Adjusted Days:", days);

    console.log("Age: ", years, " years,", months, " months,", days, " days");
    result.innerHTML = `You are <span> ${years} </span> years,<span> ${months} </span> months and <span>${days}</span> days old!`
}

document.getElementById("calculateBtn").addEventListener("click", calculateAge);
