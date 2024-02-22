const yearResult = document.querySelector('#yearResult');
const monthResult = document.querySelector('#monthResult');
const dayResult = document.querySelector('#dayResult');

const calculateAge = (birthday) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const yearOfBirth = birthday.getFullYear();
    const monthOfBirth = birthday.getMonth() + 1;
    const dayOfBirth = birthday.getDate();

    let ageInYears = currentYear - yearOfBirth;
    let ageInMonths = currentMonth - monthOfBirth;
    let ageInDays = currentDay - dayOfBirth;

    if (ageInDays < 0) {
        const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        ageInDays += daysInLastMonth;
        ageInMonths--;
    }

    if (ageInMonths < 0) {
        ageInMonths += 12;
        ageInYears--;
    }

    return {
        years: ageInYears,
        month: ageInMonths,
        days: ageInDays
    }
}

const handleKeyPress = (event) => {
    if (event.key === 't') {
        const day = Number(document.querySelector('#day').value);
        const month = Number(document.querySelector('#month').value);
        const year = Number(document.querySelector('#year').value);

        const birthday = new Date(year, month - 1, day);

        const age = calculateAge(birthday);

        dayResult.textContent = `${age.days}`;
        monthResult.textContent = `${age.month}`;
        yearResult.textContent = `${age.years}`;

    }
}

document.addEventListener('keydown', handleKeyPress);