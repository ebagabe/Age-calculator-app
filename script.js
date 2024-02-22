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

const handlePressButton = () => {
    const day = Number(document.querySelector('#day').value);
    const month = Number(document.querySelector('#month').value);
    const year = Number(document.querySelector('#year').value);

    const dayInput = document.querySelector('#day');
    const monthInput = document.querySelector('#month');
    const yearInput = document.querySelector('#year');

    const errorContainer = document.querySelector('#errorContainer');
    errorContainer.innerHTML = '';

    const maxDaysInMonth = new Date(year, month, 0).getDate();

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        displayError("Utilize numeros válidos para Dia, Mês ou Ano");
    
        dayResult.textContent = "--";
        monthResult.textContent = "--";
        yearResult.textContent = "--";
    
        dayInput.style.border = "1px solid red";
        monthInput.style.border = "1px solid red";
        yearInput.style.border = "1px solid red";
    
        return;
    }

    dayInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"
    monthInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"
    yearInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"


    if (day < 1 || day > maxDaysInMonth) {
        displayError(`O dia deve ser entre 1 e ${maxDaysInMonth}`);

        dayResult.textContent = "--";
        monthResult.textContent = "--";
        yearResult.textContent = "--";

        dayInput.style.border = "1px solid red";

        return;
    }

    dayInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"
    monthInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"
    yearInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"

    if (month < 1 || month > 12) {
        displayError("O mês deve ser maior que 1 e menor que 12")

        dayResult.textContent = "--";
        monthResult.textContent = "--";
        yearResult.textContent = "--";

        monthInput.style.border = "1px solid red";

        return;
    }

    dayInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"
    monthInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"
    yearInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"

    const birthday = new Date(year, month - 1, day);
    const currentDate = new Date();

    if (birthday > currentDate) {
        displayError("Não é permitido utilizar datas futuras");

        dayResult.textContent = "--";
        monthResult.textContent = "--";
        yearResult.textContent = "--";

        yearInput.style.border = "1px solid red";
        return;
    }

    dayInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"
    monthInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"
    yearInput.style.border = "1px solid rgba(128, 128, 128, 0.301)"

    const age = calculateAge(birthday);

    dayResult.textContent = `${age.days}`;
    monthResult.textContent = `${age.month}`;
    yearResult.textContent = `${age.years}`;

}

const displayError = (errorMessage) => {
    const errorContainer = document.querySelector('#errorContainer');
    errorContainer.innerHTML = errorMessage;
}

const button = document.querySelector('#button')

button.addEventListener('click', handlePressButton);