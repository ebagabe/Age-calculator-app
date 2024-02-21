const calculateAge = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const yearOfBirth = birthday.getFullYear();
    const monthOfBirth = birthday.getMonth() + 1;
    const dayOfBirth = birthday.getDate();

    let age = currentYear - yearOfBirth;

    if (currentMonth < monthOfBirth || (currentMonth === monthOfBirth && currentDay < dayOfBirth)) {
        age--;
    }

    // console.log(currentYear, currentMonth, currentDay, yearOfBirth, monthOfBirth, dayOfBirth);
   console.log(age);
}

const birthday = new Date(2005, 9, 15);

calculateAge();