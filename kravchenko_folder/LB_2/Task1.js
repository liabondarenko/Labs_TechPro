function ShowDay() {
    const input = document.getElementById("dat").value;
    const date = new Date(input);

    if (isNaN(date)) {
        document.getElementById("result").innerText = "Invalid input!";
        return;
    }

    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = Days[date.getDay()];  
    document.getElementById("result").innerText = dayName;
}
