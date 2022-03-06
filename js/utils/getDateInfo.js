export const getDateInfo = (date) => {
    const splitedDate = date.split(".");
    const newDate = new Date(
        Date.parse(`${splitedDate[1]}.${splitedDate[0]}.${splitedDate[2]}`)
    );

    const year = newDate.toLocaleString("ru", { year: "numeric" });

    const month =
        "Января,Февраля,Марта,Апреля,Мая,Июня,Июля,Августа,Сентября,Октября,Ноября,Декабря".split(
            ","
        )[newDate.getMonth()];

    const weekday = newDate.toLocaleString("ru", { weekday: "long" });

    const numberOfWeeks = newDate.getDate();

    return `${weekday[0].toUpperCase() + weekday.slice(1)}, ${Math.ceil(numberOfWeeks / 7)} неделя ${month} ${year} года`;
};
