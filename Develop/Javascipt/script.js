$(document).ready(function() {
    //console.log("hello");
    
    //Display current date and time
    let date = moment().format('dddd MMMM Do YYYY, h:mm');
    $('#currentDay').text(date);

    // color coding each time block
    function changeColor() {
        const d = new Date();
        let hour = d.getHours();
        for (let i = 0; i <= 9; i++) {
            console.log(hour, i)
            if (hour === i) {
                $('.description').css("background", "red")
            } else if (hour < i) {
                $('.description').css("background", "lightblue")
            } else {
                $('.description').css("background", "#eee")
            }
        }
    }

    setInterval(function(){
        changeColor();
    },1000)
});
