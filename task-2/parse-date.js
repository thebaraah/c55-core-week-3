function parseDateString(dateString) {
    const [format, datePart]= dateString.split(" ");//splet by space 

    const [first, second, year]= datePart.split("-").map(Number); //seprator and number 

    let day , month ;

    if (format === "MDY"){
        month = first;
        day = second;
    } else if (format === "DMY"){
        day = first;
        month = second;
    }
    return {day, month, year };

}

console.log(parseDateString("MDY 10-21-1983"));
console.log(parseDateString("DMY 21-10-1983"));
console.log(parseDateString("MDY 03-15-2024"));
console.log(parseDateString("DMY 15-03-2024"));
