//var declaration
function output() {
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var cc = (yy - 1) / 100 + 1;
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleName = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var birthday = new Date(mm + "/" + dd + "/" + yy);
    var dayOfTheWeek = birthday.getDay();
    
     // formula for getting akan names
    var result =
        parseInt(cc / 4 - 2 * cc - 1 + (5 * yy/4)  + (26 * (mm + 1)) / 10 + dd) % 7;
        
    if (document.getElementById("gender").checked) {
        var gender = "male";
    } else {
        var gender = "female";
    }
    if (mm < 1 || mm > 12 || (mm == 2 && dd > 29)) {
        alert("invalid month");
    } else if (dd < 1 || dd > 31) {
        alert("invalid date");
    } else if (yy < 1900 || yy > 2022) {
        alert("invalid year");
        //used the function below to round off numbers


    } else if (Math.round(result) == 1 && gender === "male") {
        document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + ", your akan name is " + maleName[1];
    } else if (Math.round(result) == 2 && gender === "male") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + maleName[2];
    } else if (Math.round(result) == 3 && gender === "male") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + maleName[3];
    } else if (Math.round(result) == 4 && gender === "male") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + maleName[4];
    } else if (Math.round(result) == 5 && gender === "male") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + maleName[5];
    } else if (Math.round(result) == 6 && gender === "male") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + maleName[6];
    } else if (Math.round(result) == 0 && gender === "male") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + maleName[0];
    } else if (Math.round(result) == 1 && gender === "female") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + femaleName[1];
    } else if (Math.round(result) == 2 && gender === "female") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + femaleName[2];
    } else if (Math.round(result) == 3 && gender === "female") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + femaleName[3];
    } else if (Math.round(result) == 4 && gender === "female") { document.getElementById("results").innerHTML =   "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + femaleName[4];
    } else if (Math.round(result) == 5 && gender === "female") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + femaleName[5];
    } else if (Math.round(result) == 6 && gender === "female") { document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + femaleName[6];
    } else if (Math.round(result) == 0 && gender === "female") {document.getElementById("results").innerHTML = "You were born on " + days[dayOfTheWeek] + "  and your Akan name is  " + femaleName[0];
    } else { alert("Fill in all required fields");
    }
}