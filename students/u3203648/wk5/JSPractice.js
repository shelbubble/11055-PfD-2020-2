var getup = window.prompt ("when do you want to wake up?");

var alarm = "beep beep beep";

var time = 1;

while (time > 0 && time < 24) {
    if (time == getup){
        document.write(alarm);
        break;
    } else {

    }
    time++;
    document.write("<b>" + time + "</b>" + "<br/>");
}
// IF Time after 0900
//  Check Sleep_Status
// IF Sleep_Status "asleep"
//  Turn on Alarm
// LOOP while "asleep"
// ELSE End

}
